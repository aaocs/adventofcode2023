import * as index from '../src/index';

type StringToNumber = [arg: string, expected: number];

const testData: StringToNumber[] = [
    ['1abc2', 12],
    ['pqr3stu8vwx', 38],
    ['a1b2c3d4e5f', 15],
    ['treb7uchet', 77],
];

describe('construct number', () => {
    test.each<StringToNumber>(testData)(
        'construct number',
        (arg, expected) => {
            expect(index.constructNumber(arg)).toBe(expected);
        }
    );
});
