// Parsers
import { toFixed, toFixedFloat } from '../number_parsers/index';

// Installed Package
import VDate from '@vieolo/date';

export function parseHourAndMinute(hour: number, minute: number) : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'string') : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'date') : Date;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'vdate') : VDate;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-float') : number;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'decimal-string') : string;
export function parseHourAndMinute(hour: number, minute: number, returnType?: 'string' | 'date' | 'decimal-float' | 'decimal-string' | 'vdate') : any {
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