import VDate from '@vieolo/date';
export declare function parseHourAndMinute(hour: number, minute: number): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'string'): string;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'date'): Date;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'vdate'): VDate;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-float'): number;
export declare function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-string'): string;
export declare function parseDecimalTime(decimal: number, includeSecond?: boolean): string;
