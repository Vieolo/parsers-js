/**
 * Same as toFixed but rounds up if the third decimal place is 5
 * @param original The original float
 * @param n The number of decimal places
 * @param trim Whether the trailing zeros should be removed or not (defaults to false)
 */
export function toFixed(original: number, n: number, trim?: boolean) : string {
	let v = (+(Math.round(+(original + 'e' + n)) + 'e' + -n)).toFixed(n);
	if (!trim) return v; 
	
	return v.replace(/0+$/,'').replace(/\.$/, "");
}

/**
 * Same as toFixed but rounds up if the third decimal place is 5 and parse it to float
 * @param original The original float
 * @param n The number of decimal places
 */
export function toFixedFloat(original: number, n: number) : number {
	return parseFloat(toFixed(original, n));
}


export function parseInputFloatToSafeString(s: string) : string {
	let splited = s.split(".");
	let left = splited[0];
	let right;

	if (splited.length == 1) right = "00";
	else right = splited[1];

	let finalRight = "";
	if (right.length == 0) finalRight = "00";
	else if (right.length == 1) finalRight = right + "0";
	else if (right.length > 2) finalRight = right[0] + right[1];
	else finalRight = right;
	return left + finalRight;
}