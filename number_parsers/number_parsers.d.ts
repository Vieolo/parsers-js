/**
 * Same as toFixed but rounds up if the third decimal place is 5
 * @param original The original float
 * @param n The number of decimal places
 */
export declare function toFixed(original: number, n: number): string;
/**
 * Same as toFixed but rounds up if the third decimal place is 5 and parse it to float
 * @param original The original float
 * @param n The number of decimal places
 */
export declare function toFixedFloat(original: number, n: number): number;
export declare function parseInputFloatToSafeString(s: string): string;
