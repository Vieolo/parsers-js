// Parsers
import { 
    addWhitespaceAtInterval
} from '../src/string_parsers'


describe("String Parsers", () => {

    it('Adds whitespace to the string correctly', () => {
        // Single Word, multiple whitespaces
        expect(addWhitespaceAtInterval("Something", 2)).toBe("So me th in g");

        // Single word, one whitespace
        expect(addWhitespaceAtInterval("Something", 5)).toBe("Somet hing");

        // Single word, no whitespace
        expect(addWhitespaceAtInterval("Something", 11)).toBe("Something");

        // Multiple words, multiple whitespaces
        expect(addWhitespaceAtInterval("Something funny", 2)).toBe("So me th in g fu nn y");

        // Multiple words, one whitespace
        expect(addWhitespaceAtInterval("Something funny", 5)).toBe("Somet hing funny");

        // Multiple words, no whitespace
        expect(addWhitespaceAtInterval("Something funny", 11)).toBe("Something funny");
    })

})
