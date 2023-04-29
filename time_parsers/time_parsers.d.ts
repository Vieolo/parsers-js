import VDate from '@vieolo/vdate';
export declare function parseHourAndMinute(hour: number, minute: number): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'string'): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'date'): Date;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'vdate'): VDate;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-float'): number;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-string'): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'integer-number'): number;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'integer-string'): string;
export declare function parseDecimalTime(decimal: number, includeSecond?: boolean): string;
/** parses 126 to 2.10 (string) */
export declare function parseMinuteCount(count: number, returnType: 'decimal-string'): string;
/** parses 126 to 2.10 (number) */
export declare function parseMinuteCount(count: number, returnType: 'decimal-number'): number;
/** parses 126 to 210 (string) */
export declare function parseMinuteCount(count: number, returnType: 'integer-string'): string;
/** parses 126 to 210 (number) */
export declare function parseMinuteCount(count: number, returnType: 'integer-number'): number;
/** parses 126 to 2h 6m */
export declare function parseMinuteCount(count: number, returnType: 'formatted-hour-minute'): string;
/** parses 126 to 02:06 */
export declare function parseMinuteCount(count: number, returnType: 'formatted-time'): string;
/** parses 126 to a VDate instance with the current day, month, and year, at 02:06 AM */
export declare function parseMinuteCount(count: number, returnType: 'vdate'): VDate;
/** parses 02:06 to 2.10 (number) */
export declare function parseFormattedTime(time: string, returnType: 'decimal-number'): number;
/** parses 02:06 to 2.10 (string) */
export declare function parseFormattedTime(time: string, returnType: 'decimal-string'): string;
/**
 * This function receives an array of entries and combine those close to each other, separated by the maximum allowed difference.
 *
 * For example, four entry objects are given. (to simplify this example, the times are in hours)
 * 1. {start: 1, end: 2}
 * 2. {start: 2, end: 3}
 * 3. {start: 8, end: 9}
 * 4. {start: 11, end: 12}
 *
 * If the maximum allowed difference is 4 hours, the first and last two entries are separately combined.
 * i.e. `[{start: 1, end: 3}, {start: 8, end: 12}]`
 * @param entries An array of objects, containing the start and end of the entries
 * @param maximumAllowedDifference The maximum allowed difference between the end of one entry and the start of the next in milliseconds
 */
export declare function parseTimeEntries(entries: {
    start: string | number | Date | VDate;
    end: string | number | Date | VDate;
}[], maximumAllowedDifference: number): {
    start: VDate;
    end: VDate;
}[];
