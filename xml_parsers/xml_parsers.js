/**
 * Convers an object to XML reperesentation in the string format
 *
 * For adding an attribute to a tag, there are two ways.
 *
 * First, if value of the object key is a nested object, you can add attributes as key-value pair while adding `___` (3 underscore) to the key. You can add multiple attributes by passing multiple attribute keys
 * ```js
 * parent: {
 *      regularKey: 123,
 *      ___attr: "attribute value"
 * }
 * ```
 * becomes:
 * ```xml
 * <parent attr='attribute value' >
 *      <regularKey>123</regularKey>
 * </parent>
 * ```
 *
 * If the attribute contains `:`, for example, `xmlns:xsi`, replace the `:` with `___` (3 underscore)
 * ```js
 * Document: {
 *      ___xmlns___xsi: "http://www.w3.org/2001/XMLSchema-instance",
 * }
 * ```
 * becomes:
 * ```xml
 * <Document xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' ><Document>
 * ```
 *
 * second, If the value of the object key is a regular value (string, number, and boolean), pass an object with the tag value having the key of `____` (4 underscore) and attributes having `___` (3 underscore) at the beginning
 * ```js
 * value: {
 *      ____: "text value",
 *      ___fontSize: 12,
 *      ___fontWeight: 'bold'
 * }
 * ```
 * becomes:
 * ```xml
 * <value fontSize='12' fontWeight='bold' >text value</value>
 * ```
 *
 * @param obj A Javascript object
 * @param format Whether to format the generated XML content or not (defaults to: `false`)
 * @returns The XML representation of the object in string format
 */
export function objectToXML(obj, format) {
    function getAttributes(openingKey) {
        let attributes = {};
        if (obj[openingKey] === null || obj[openingKey] === undefined) {
            return attributes;
        }
        // Getting the attribute keys and values
        for (let i = 0; i < Object.keys(obj[openingKey]).length; i++) {
            const key = Object.keys(obj[openingKey])[i];
            if (key !== '____' && key.substr(0, 3) === '___') {
                attributes[key.substr(3).replace('___', ':')] = obj[openingKey][key];
            }
        }
        return attributes;
    }
    function openingTagWithAttributes(tagName, attributes) {
        let attr = '';
        for (let i = 0; i < Object.keys(attributes).length; i++) {
            const key = Object.keys(attributes)[i];
            const value = attributes[key];
            attr += `${key}='${value}' `;
        }
        return `<${tagName} ${attr.trim()} >`;
    }
    function createOpeningTag(openingKey) {
        let attributes = getAttributes(openingKey);
        if (Object.keys(attributes).length === 0)
            return `<${openingKey}>`;
        else {
            return openingTagWithAttributes(openingKey, attributes);
        }
    }
    function hasToBeFlat(openingKey) {
        let hasAttr = false;
        let hasValueIndicator = false;
        if (obj[openingKey] === null || obj[openingKey] === undefined) {
            return false;
        }
        for (let i = 0; i < Object.keys(obj[openingKey]).length; i++) {
            const key = Object.keys(obj[openingKey])[i];
            if (key === '____')
                hasValueIndicator = true;
            else if (key.substr(0, 3) === '___')
                hasAttr = true;
        }
        return hasAttr && hasValueIndicator;
    }
    function objectToFlatOpenningTag(openingKey) {
        let attributes = getAttributes(openingKey);
        return openingTagWithAttributes(openingKey, attributes);
    }
    // Creating the empty string
    var xml = '';
    // Starting to loop through the children
    for (var prop in obj) {
        if (prop.substr(0, 3) === '___')
            continue;
        let htbf = hasToBeFlat(prop);
        // Adding the opening tag if the child is not an array
        if (!Array.isArray(obj[prop])) {
            if (htbf) {
                xml += objectToFlatOpenningTag(prop);
                xml += obj[prop]['____'];
            }
            else {
                xml += createOpeningTag(prop);
            }
        }
        // Working on the closing tag
        if (Array.isArray(obj[prop])) {
            for (var array in obj[prop]) {
                xml += createOpeningTag(prop);
                xml += objectToXML(new Object(obj[prop][array]));
                xml += "</" + prop + ">";
            }
        }
        else if (typeof obj[prop] == "object" && !htbf) {
            xml += objectToXML(new Object(obj[prop]));
        }
        else if (!htbf) {
            xml += obj[prop];
        }
        if (!Array.isArray(obj[prop]))
            xml += `</${prop}>`;
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return format ? formatXML(xml) : xml;
}
/**
 * Takes the valid but unformatted XML content in the string format and adds the necessary formatting to it.
 * So the input of:
 * ```xml
 * <Parent><Child>Value</Child></Parent>
 * ```
 * becomes:
 * ```xml
 * <Parent>
 *      <Child>Value</Child>
 * </Parent>
 * ```
 * @param input The valid but unformatted XML in the string format
 * @param indent The indent used to format the XML content (defaults to: tabs `\t`)
 */
export function formatXML(input, indent) {
    indent = indent || '\t';
    //PART 1: Add \n where necessary
    let xmlString = input
        .trim()
        .replace(/(<([a-zA-Z]+\b)[^>]*>)(?!<\/\2>|[\w\s])/g, "$1\n") //add \n after tag if not followed by the closing tag of pair or text node
        .replace(/(<\/[a-zA-Z]+[^>]*>)/g, "$1\n") //add \n after closing tag
        .replace(/>\s+(.+?)\s+<(?!\/)/g, ">\n$1\n<") //add \n between sets of angled brackets and text node between them
        .replace(/>(.+?)<([a-zA-Z])/g, ">\n$1\n<$2") //add \n between angled brackets and text node between them
        .replace(/\?></, "?>\n<"); //detect a header of XML
    let xmlArr = xmlString.split('\n'); //split it into an array (for analise each line separately)
    //PART 2: indent each line appropriately
    var tabs = ''; //store the current indentation
    var start = 0; //starting line
    if (/^<[?]xml/.test(xmlArr[0]))
        start++; //if the first line is a header, ignore it
    for (var i = start; i < xmlArr.length; i++) {
        var line = xmlArr[i].replace(/^\s+|\s+$/g, ''); //trim it (just in case)
        if (/^<[/]/.test(line)) { //if the line is a closing tag        
            tabs = tabs.replace(indent, ''); //remove one indent from the store
            xmlArr[i] = tabs + line; //add the tabs at the beginning of the line
        }
        else if (/<.*>.*<\/.*>|<.*[^>]\/>/.test(line)) { //if the line contains an entire node        
            //leave the store as is
            xmlArr[i] = tabs + line; //add the tabs at the beginning of the line
        }
        else if (/<.*>/.test(line)) { //if the line starts with an opening tag and does not contain an entire node        
            xmlArr[i] = tabs + line; //add the tabs at the beginning of the line
            tabs += indent; //and add one indent to the store
        }
        else { //if the line contain a text node        
            xmlArr[i] = tabs + line; // add the tabs at the beginning of the line
        }
    }
    //PART 3: return formatted string (source)
    return xmlArr.join('\n'); //rejoin the array to a string and return it
}
