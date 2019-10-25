import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'maxChars' })
export class MaxCharactersPipe implements PipeTransform {
    transform (value: string, maxChars: number, singleLine: boolean): string {
        return truncateString(value, maxChars, singleLine);
    }
}

function truncateString (text: string, maxChars: number, singleLine: boolean): string {
    const lines: string[] = [];
    let nextBreak: number | undefined = 0;
    let removeExtraCharacter;

    maxChars = maxChars || 70; // This is a magic number. It should be provided from the meta data.
    while (text) {
        // Default value
        removeExtraCharacter = false;
        const lineBreakMatch = text.match(/[\n]+[^\n]/);
        const lineBreakIndex = lineBreakMatch && lineBreakMatch.index;
        // If the string has a line ending and it's less then the maximum ammount of characters per line
        if (lineBreakIndex && lineBreakIndex <= maxChars) {
            nextBreak = lineBreakIndex;
            // We need to remove an extra char since \n has the length of 2.
            removeExtraCharacter = true;
        } else {
            // If this is the last part of the string we just set next break to the length of the string
            if (text.length <= maxChars) {
                nextBreak = text.length;
            } else if (text.charAt(maxChars).match(/\s/)) { // Check if the breaking characters is a white space character. Then it's safe to break, else we find the previous whitespace character.
                nextBreak = maxChars;
                removeExtraCharacter = true;
            } else {
                // Store the line up until max character in a temp variable so we can check the first whitespace character from the end of the string and break of that.
                const temp = text.substring(0, maxChars);
                const lastMatch = temp.match(/\s(?!.*\s)/); // Find the last whitespace occurence in the subtracted portion of the string
                if (lastMatch) {
                    nextBreak = lastMatch.index;
                    removeExtraCharacter = true;
                } else { // If no whitespace char is found we are forced to break after the max character amount.
                    nextBreak = maxChars;
                }
            }
        }
        lines[lines.length] = text.slice(0, nextBreak);
        text = text.slice(nextBreak + removeExtraCharacter);

        if (singleLine) {
            // If provided string is a single line already we don't need to add ellipsis
            return text === '' ? lines[0] : lines[0].substring(0, maxChars - 1) + '\u2026'; // Ellipsis replaces last characters to not exeed max characters
        }
    }

    // Put together the new pieces as a string
    return lines.join('\n');
}
