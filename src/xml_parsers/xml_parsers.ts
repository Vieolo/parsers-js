/**
 * Convers an object to XML reperesentation in the string format
 * @param obj A Javascript object
 * @returns The XML representation of the object in string format
 */
export function objectToXML(obj: any) : string {
    var xml = '';
    for (var prop in obj) {
      xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
      if (obj[prop] instanceof Array) {
        for (var array in obj[prop]) {
          xml += "<" + prop + ">";
          xml += objectToXML(new Object(obj[prop][array]));
          xml += "</" + prop + ">";
        }
      } else if (typeof obj[prop] == "object") {
        xml += objectToXML(new Object(obj[prop]));
      } else {
        xml += obj[prop];
      }
      xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}