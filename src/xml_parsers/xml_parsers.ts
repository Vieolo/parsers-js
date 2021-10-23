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
 * // <parent attr='attribute value' >
 * //       <regularKey>123</regularKey>
 * // </parent>
 * ```
 * 
 * second, If the value of the object key is a regular value (string, number, and boolean), pass an object with the tag value having the key of `____` (4 underscore) and attributes having `___` (3 underscore) at the beginning
 * ```js
 * value: {
 *      ____: "text value",
 *      ___fontSize: 12,
 *      ___fontWeight: 'bold'
 * }
 * // <value fontSize='12' fontWeight='bold' >text value</value>
 * ```
 * 
 * @param obj A Javascript object
 * @returns The XML representation of the object in string format
 */
export function objectToXML(obj: any): string {

    function getAttributes(openingKey: string): { [key: string]: string } {
        let attributes: { [key: string]: string } = {}

        if (obj[openingKey] === null || obj[openingKey] === undefined) {
            return attributes;
        }

        // Getting the attribute keys and values
        for (let i = 0; i < Object.keys(obj[openingKey]).length; i++) {
            const key = Object.keys(obj[openingKey])[i];
            if (key !== '____' && key.substr(0, 3) === '___') {
                attributes[key.substr(3)] = obj[openingKey][key]
            }
        }
        return attributes;
    }

    function openingTagWithAttributes(tagName: string, attributes: { [key: string]: string }): string {
        let attr = '';
        for (let i = 0; i < Object.keys(attributes).length; i++) {
            const key = Object.keys(attributes)[i];
            const value = attributes[key];
            attr += `${key}='${value}' `
        }
        return `<${tagName} ${attr.trim()} >`
    }

    function createOpeningTag(openingKey: string): string {
        let attributes = getAttributes(openingKey);

        if (Object.keys(attributes).length === 0) return `<${openingKey}>`
        else {
            return openingTagWithAttributes(openingKey, attributes);
        }
    }

    function hasToBeFlat(openingKey: string) {
        let hasAttr = false;
        let hasValueIndicator = false;
        if (obj[openingKey] === null || obj[openingKey] === undefined) {
            return false;
        }
        for (let i = 0; i < Object.keys(obj[openingKey]).length; i++) {
            const key = Object.keys(obj[openingKey])[i];
            if (key === '____') hasValueIndicator = true
            else if (key.substr(0, 3) === '___') hasAttr = true;            
        }

        return hasAttr && hasValueIndicator
    }

    function objectToFlatOpenningTag(openingKey: string): string {
        let attributes = getAttributes(openingKey)
        return openingTagWithAttributes(openingKey, attributes)
    }

    // Creating the empty string
    var xml = '';

    // Starting to loop through the children
    for (var prop in obj) {
        if (prop.substr(0, 3) === '___') continue;
        let htbf = hasToBeFlat(prop);
        // Adding the opening tag if the child is not an array
        if (!Array.isArray(obj[prop])) {
            if (htbf) {
                xml += objectToFlatOpenningTag(prop);
                xml += obj[prop]['____']
            }else {
                xml += createOpeningTag(prop)
            } 
        }

        // Working on the closing tag
        if (Array.isArray(obj[prop])) {
            for (var array in obj[prop]) {
                xml += createOpeningTag(prop);
                xml += objectToXML(new Object(obj[prop][array]));
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object" && !htbf) {
            xml += objectToXML(new Object(obj[prop]));
        } else if (!htbf) {
            xml += obj[prop];
        }

        if (!Array.isArray(obj[prop])) xml += `</${prop}>`;
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}