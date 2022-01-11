/**
 * Same as toFixed but rounds up if the third decimal place is 5
 * @param original The original float
 * @param n The number of decimal places
 * @param trim Whether the trailing zeros should be removed or not (defaults to false)
 */
export function toFixed(original, n, trim) {
    let v = (+(Math.round(+(original + 'e' + n)) + 'e' + -n)).toFixed(n);
    if (!trim)
        return v;
    return v.replace(/0+$/, '').replace(/\.$/, "");
}
/**
 * Same as toFixed but rounds up if the third decimal place is 5 and parse it to float
 * @param original The original float
 * @param n The number of decimal places
 */
export function toFixedFloat(original, n) {
    return parseFloat(toFixed(original, n));
}
export function parseInputFloatToSafeString(s, decimalPlaces = 2) {
    let splited = s.split(".");
    let left = splited[0];
    let right;
    if (splited.length == 1 || !splited[1])
        right = Array(decimalPlaces).fill("0").join("");
    else
        right = splited[1];
    let finalRight = "";
    if (right.length === decimalPlaces) {
        finalRight = right;
    }
    else if (right.length < decimalPlaces) {
        finalRight = right + Array(decimalPlaces - right.length).fill("0").join("");
    }
    else {
        finalRight = right.substring(0, decimalPlaces);
    }
    return left + finalRight;
}
