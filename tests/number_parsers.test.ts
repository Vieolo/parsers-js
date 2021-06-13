// Parsers
import { parseInputFloatToSafeString } from '../src/number_parsers'


describe("Number Parsers", () => {

    it("converts input float to safe string", () => {
        expect(parseInputFloatToSafeString("20.13")).toBe("2013");
        expect(parseInputFloatToSafeString("20.1")).toBe("2010");
        expect(parseInputFloatToSafeString("20")).toBe("2000");
        expect(parseInputFloatToSafeString("20.")).toBe("2000");
        expect(parseInputFloatToSafeString("20.132")).toBe("2013");
    })

})