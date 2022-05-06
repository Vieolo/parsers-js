// Parsers
import { toFixed, toFixedFloat } from '../number_parsers/index';

// Installed Package
import VDate from '@vieolo/date';
import { time24Hours, time24HoursWithSeconds } from '@vieolo/regex-library';

export function parseHourAndMinute(hour: number, minute: number) : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'string') : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'date') : Date;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'vdate') : VDate;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-float') : number;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-string') : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'integer-number') : number;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'integer-string') : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'string' | 'date' | 'decimal-float' | 'decimal-string' | 'vdate' | 'integer-number' | 'integer-string') : any {
	if (returnType && returnType == 'date') {
		let now = new Date();
		return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
	}else if (returnType && returnType == 'vdate') {
		let now = new VDate();
		return new VDate(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
	}else if (returnType == 'decimal-float') {
        return toFixedFloat( ((hour * 60) + minute) / 60, 2 );
    }else if (returnType == 'decimal-string') {
        return toFixed( ((hour * 60) + minute) / 60, 2 );
    }else if (returnType == 'integer-number') {
        return +toFixed( ((hour * 60) + minute) / 60, 2 ).replace(".", "");
    }else if (returnType == 'integer-string') {
        return toFixed( (((hour * 60) + minute) * 100) / 60, 0 );
    }

	let sHour = hour < 10 ? `0${toFixed(hour, 0)}` : `${toFixed(hour, 0)}`;
	let sMinute = minute < 10 ? `0${toFixed(minute, 0)}` : `${toFixed(minute, 0)}`;
	return `${sHour}:${sMinute}`;
}


export function parseDecimalTime(decimal: number, includeSecond?: boolean): string {
	let multiplied: number = decimal * 60;
	let seconds: number = multiplied % 1;
	let minutes: number = toFixedFloat((multiplied % 60) - seconds, 0);
	let hours: number = toFixedFloat((multiplied - minutes - seconds) / 60, 0);

	let finalSeconds: number = toFixedFloat((seconds < 0.01 ? 0 : seconds) * 60, 0);	
	if (finalSeconds == 60) {
		finalSeconds = 0;
		minutes += 1;
		if (minutes == 60)  {
			minutes = 0;
			hours += 1;
		}
	}

	if (!includeSecond && finalSeconds == 48) {
		minutes += 1;
	}

	let outputHour = `${hours < 10 ? "0" + hours : hours}`;
	let outputMinute = `${minutes < 10 ? "0" + minutes : minutes}`;
	let outputSecond = `${finalSeconds < 10 ? "0" + finalSeconds : finalSeconds}`;

	return `${outputHour}:${outputMinute}${includeSecond ? ":" + outputSecond : ""}`;
}


/** parses 126 to 2.10 (string) */
export function parseMinuteCount(count: number, returnType: 'decimal-string') : string;
/** parses 126 to 2.10 (number) */
export function parseMinuteCount(count: number, returnType: 'decimal-number') : number;
/** parses 126 to 210 (string) */
export function parseMinuteCount(count: number, returnType: 'integer-string') : string;
/** parses 126 to 210 (number) */
export function parseMinuteCount(count: number, returnType: 'integer-number') : number;
/** parses 126 to 2h 6m */
export function parseMinuteCount(count: number, returnType: 'formatted-hour-minute') : string;
/** parses 126 to 02:06 */
export function parseMinuteCount(count: number, returnType: 'formatted-time') : string;
/** parses 126 to a VDate instance with the current day, month, and year, at 02:06 AM */
export function parseMinuteCount(count: number, returnType: 'vdate') : VDate;
export function parseMinuteCount(count: number, returnType: 'decimal-string' | 'decimal-number' | 'formatted-hour-minute' | 'formatted-time' | 'vdate' | 'integer-string' | 'integer-number') : any {
	if (returnType == 'decimal-number') return toFixedFloat(count / 60, 2);
	else if (returnType == 'decimal-string') return toFixed(count / 60, 2);
	else if (returnType == 'integer-string') return toFixed((count / 60) * 100, 0);
	else if (returnType == 'integer-number') return +toFixed(count / 60, 2).replace(".", "");
	else if (returnType == 'formatted-hour-minute') return VDate.getTimeFromMinuteCount(count);

	let hourCount = Math.floor(count / 60);
	let minuteCount = count % 60;

	if (returnType == 'formatted-time') return parseHourAndMinute(hourCount, minuteCount, 'string');
	else return parseHourAndMinute(hourCount, minuteCount, 'vdate');
}


/** parses 02:06 to 2.10 (number) */
export function parseFormattedTime(time: string, returnType: 'decimal-number') : number;
/** parses 02:06 to 2.10 (string) */
export function parseFormattedTime(time: string, returnType: 'decimal-string') : string;
export function parseFormattedTime(time: string, returnType: 'decimal-number' | 'decimal-string') : any {
	
	if (!time24Hours.test(time) && !time24HoursWithSeconds.test(time)) throw new Error("The given time is not valid");
	
	let splitted = time.split(':');

	let minuteCount = (
		parseInt((splitted[0])) * 60) +
		parseInt(splitted[1]) +
		((splitted.length > 2 && parseInt(splitted[2]) > 29) ? 1 : 0
	) // Adding one minute if the duration has any seconds
	
	let parsed: string | number;
	
	if (returnType == 'decimal-number') parsed = parseMinuteCount(minuteCount, 'decimal-number');
	else parsed = parseMinuteCount(minuteCount, 'decimal-string');
	
    return parsed;
}
