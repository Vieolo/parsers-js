import VDate from '@vieolo/date';
export declare function parseHourAndMinute(hour: number, minute: number): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'string'): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'date'): Date;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'vdate'): VDate;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-float'): number;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-string'): string;
export declare function parseDecimalTime(decimal: number, includeSecond?: boolean): string;
/** parses 126 to 2.10 (string) */
export declare function parseMinuteCount(count: number, returnType: 'decimal-string'): string;
/** parses 126 to 2.10 (number) */
export declare function parseMinuteCount(count: number, returnType: 'decimal-number'): number;
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
