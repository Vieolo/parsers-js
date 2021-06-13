/**
 * Same as toFixed but rounds up if the third decimal place is 5
 * @param original The original float
 * @param n The number of decimal places
 */
export function toFixed(original: number, n: number) : string {
	return (+(Math.round(+(original + 'e' + n)) + 'e' + -n)).toFixed(n);
}

/**
 * Same as toFixed but rounds up if the third decimal place is 5 and parse it to float
 * @param original The original float
 * @param n The number of decimal places
 */
export function toFixedFloat(original: number, n: number) : number {
	return parseFloat(toFixed(original, n));
}