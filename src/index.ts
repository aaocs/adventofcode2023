import * as fs from 'fs';

export function readCalibrationValues(path: string): number {
    const data = fs.readFileSync(path, 'utf8');
    return sumWords(data.split('\n'));
}

export function constructNumber(word: string): number {
    const chars: string[] = word.split('');

    const firstNumChar = getFirstNumChar(chars);
    const lastNumChar = getFirstNumChar(chars.reverse());

    return parseInt(firstNumChar + lastNumChar);
}

function getFirstNumChar(chars: string[]): string {
    for (const char of chars) {
        if (!isNaN(parseInt(char))) {
            return char;
        }
    }

    throw new Error(`no numbers in word: ${chars.join('')}`);
}

export function sumWords(words: string[]): number {
    return words.reduce((aggregate, current) => aggregate + constructNumber(current), 0);
}

function problem1part1(): void {
    const answer: number = readCalibrationValues('./src/resources/calibrationValues');
    console.log(answer);
}

problem1part1();
