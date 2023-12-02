import * as index from '../src/day1part1';

type StringToNumber = [arg: string, expected: number];
type StringArrayToNumber = [arg: string[], expected: number];
type StringArray = [arg: string[]];

const validWords: StringToNumber[] = [
    ['1abc2', 12],
    ['pqr3stu8vwx', 38],
    ['a1b2c3d4e5f', 15],
    ['treb7uchet', 77],
];

const invalidWords: string[] = [
    '',
    'a',
    'ab',
    'shfadjhljfdklhjskdakjdfhskhfjskahflsha',
];

const validWordArrays: StringArrayToNumber[] = [
    [[], 0],
    [['1abc2'], 12],
    [['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'], 142],
];


const invalidWordArrays: StringArray[] = [
    [['a']],
    [['a', '1']],
    [['1', 'a']],
];


describe('problem 1 part 1', () => {
    test('sum words from file', () => {
        const filePath = './test/resources/calibrationValues';
        expect(index.readCalibrationValues(filePath)).toBe(142);
    });
});

describe('sum words', () => {
    test.each<StringArrayToNumber>(validWordArrays)(
        'an empty array or an array of strings containing at least 1 digit returns a number',
        (arg, expected) => {
            expect(index.sumWords(arg)).toBe(expected);
        }
    );

    test.each<StringArray>(invalidWordArrays)(
        'array of strings string at least one string with no digits throws error',
        invalidWordArray => {
            expect(() => index.sumWords(invalidWordArray)).toThrow();
        }
    );
});

describe('construct number', () => {
    test.each<StringToNumber>(validWords)(
        'string containing at least 1 digit returns number',
        (arg, expected) => {
            expect(index.constructNumber(arg)).toBe(expected);
        }
    );

    test.each<string>(invalidWords)(
        'string containing no digits throws error',
        invalidWord => {
            expect(() => index.constructNumber(invalidWord)).toThrow(
                `no numbers in word: ${invalidWord}`
            );
        }
    );
});
