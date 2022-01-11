// Parsers
import { parseInputFloatToSafeString, toFixed } from '../src/number_parsers'


describe("Number Parsers", () => {

    it("fixes the decimal of numbers", () => {
        expect(toFixed(22.234, 2)).toBe("22.23");
        expect(toFixed(22.236, 2)).toBe("22.24");
        expect(toFixed(22.236, 6)).toBe("22.236000");
        expect(toFixed(22.236, 6, true)).toBe("22.236");
        expect(toFixed(20002.20036, 9, true)).toBe("20002.20036");
        expect(toFixed(22, 2)).toBe("22.00");
        expect(toFixed(22, 0)).toBe("22");
        expect(toFixed(22, 2, true)).toBe("22");
        expect(toFixed(0, 2)).toBe("0.00");
        expect(toFixed(0, 2, true)).toBe("0");
    });

    it("converts input float to safe string", () => {
        expect(parseInputFloatToSafeString("20.13")).toBe("2013");
        expect(parseInputFloatToSafeString("20.1")).toBe("2010");
        expect(parseInputFloatToSafeString("20")).toBe("2000");
        expect(parseInputFloatToSafeString("20.")).toBe("2000");
        expect(parseInputFloatToSafeString("20.132")).toBe("2013");

        expect(parseInputFloatToSafeString("20.13", 0)).toBe("20");
        expect(parseInputFloatToSafeString("20.1", 0)).toBe("20");
        expect(parseInputFloatToSafeString("20", 0)).toBe("20");
        expect(parseInputFloatToSafeString("20.", 0)).toBe("20");
        expect(parseInputFloatToSafeString("20.132", 0)).toBe("20");

        expect(parseInputFloatToSafeString("20.13", 1)).toBe("201");
        expect(parseInputFloatToSafeString("20.1", 1)).toBe("201");
        expect(parseInputFloatToSafeString("20", 1)).toBe("200");
        expect(parseInputFloatToSafeString("20.", 1)).toBe("200");
        expect(parseInputFloatToSafeString("20.132", 1)).toBe("201");

        expect(parseInputFloatToSafeString("20.13", 3)).toBe("20130");
        expect(parseInputFloatToSafeString("20.1", 3)).toBe("20100");
        expect(parseInputFloatToSafeString("20", 3)).toBe("20000");
        expect(parseInputFloatToSafeString("20.", 3)).toBe("20000");
        expect(parseInputFloatToSafeString("20.132", 3)).toBe("20132");

        expect(parseInputFloatToSafeString("20.13", 4)).toBe("201300");
        expect(parseInputFloatToSafeString("20.1", 4)).toBe("201000");
        expect(parseInputFloatToSafeString("20", 4)).toBe("200000");
        expect(parseInputFloatToSafeString("20.", 4)).toBe("200000");
        expect(parseInputFloatToSafeString("20.132", 4)).toBe("201320");
    })

})