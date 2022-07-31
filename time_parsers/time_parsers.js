// Parsers
import { toFixed, toFixedFloat } from '../number_parsers';
// Installed Package
import VDate from '@vieolo/date';
import { time24Hours, time24HoursWithSeconds } from '@vieolo/regex-library';
export function parseHourAndMinute(hour, minute, returnType) {
    if (returnType && returnType == 'date') {
        let now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    }
    else if (returnType && returnType == 'vdate') {
        let now = new VDate();
        return new VDate(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    }
    else if (returnType == 'decimal-float') {
        return toFixedFloat(((hour * 60) + minute) / 60, 2);
    }
    else if (returnType == 'decimal-string') {
        return toFixed(((hour * 60) + minute) / 60, 2);
    }
    else if (returnType == 'integer-number') {
        return +toFixed(((hour * 60) + minute) / 60, 2).replace(".", "");
    }
    else if (returnType == 'integer-string') {
        return toFixed((((hour * 60) + minute) * 100) / 60, 0);
    }
    let sHour = hour < 10 ? `0${toFixed(hour, 0)}` : `${toFixed(hour, 0)}`;
    let sMinute = minute < 10 ? `0${toFixed(minute, 0)}` : `${toFixed(minute, 0)}`;
    return `${sHour}:${sMinute}`;
}
export function parseDecimalTime(decimal, includeSecond) {
    let multiplied = decimal * 60;
    let seconds = multiplied % 1;
    let minutes = toFixedFloat((multiplied % 60) - seconds, 0);
    let hours = toFixedFloat((multiplied - minutes - seconds) / 60, 0);
    let finalSeconds = toFixedFloat((seconds < 0.01 ? 0 : seconds) * 60, 0);
    if (finalSeconds == 60) {
        finalSeconds = 0;
        minutes += 1;
        if (minutes == 60) {
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
export function parseMinuteCount(count, returnType) {
    if (returnType == 'decimal-number')
        return toFixedFloat(count / 60, 2);
    else if (returnType == 'decimal-string')
        return toFixed(count / 60, 2);
    else if (returnType == 'integer-string')
        return toFixed((count / 60) * 100, 0);
    else if (returnType == 'integer-number')
        return +toFixed(count / 60, 2).replace(".", "");
    else if (returnType == 'formatted-hour-minute')
        return VDate.getTimeFromMinuteCount(count);
    let hourCount = Math.floor(count / 60);
    let minuteCount = count % 60;
    if (returnType == 'formatted-time')
        return parseHourAndMinute(hourCount, minuteCount, 'string');
    else
        return parseHourAndMinute(hourCount, minuteCount, 'vdate');
}
export function parseFormattedTime(time, returnType) {
    if (!time24Hours.test(time) && !time24HoursWithSeconds.test(time))
        throw new Error("The given time is not valid");
    let splitted = time.split(':');
    let minuteCount = (parseInt((splitted[0])) * 60) +
        parseInt(splitted[1]) +
        ((splitted.length > 2 && parseInt(splitted[2]) > 29) ? 1 : 0); // Adding one minute if the duration has any seconds
    let parsed;
    if (returnType == 'decimal-number')
        parsed = parseMinuteCount(minuteCount, 'decimal-number');
    else
        parsed = parseMinuteCount(minuteCount, 'decimal-string');
    return parsed;
}
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
export function parseTimeEntries(entries, maximumAllowedDifference) {
    let com = [];
    for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        let start = new VDate(["string", "number"].includes(typeof e.start) ? e.start : e.start.getTime());
        let end = new VDate(["string", "number"].includes(typeof e.end) ? e.end : e.end.getTime());
        let lastCom = com[com.length - 1];
        if (com.length === 0 ||
            ((start.getTime() - lastCom.end.getTime()) > maximumAllowedDifference)) {
            com.push({ start: start, end: end });
            continue;
        }
        lastCom.end = end;
    }
    return com;
}
