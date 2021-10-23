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
export declare function objectToXML(obj: any, format?: boolean): string;
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
export declare function formatXML(input: string, indent?: string): string;
