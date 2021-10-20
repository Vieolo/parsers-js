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
export declare function objectToXML(obj: any): string;
