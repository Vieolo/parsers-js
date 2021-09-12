/**
 * Takes a string and adds whitespace in the words, at the given interval
 * The purpose of this function is to break down long words in a string which may cause spacing issue
 * Only the long words are modified and the rest are left untouched
 * A `word` is considered to be the sub string between two whitespaces
 * @param raw The original string
 * @param interval The maximum length of a word
 *
 * @example
 * ```ts
 * addWhitespaceAtInterval("Something", 2) // "So me th in g"
 * ```
 */
export declare function addWhitespaceAtInterval(raw: string, interval: number): string;
