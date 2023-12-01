import * as index from '../src/index';

type NumberToNumber = [numIn: number, numOut: number];

const testData: NumberToNumber[] = [
    [0, 1],
];

describe('add one', () => {
    test.each<NumberToNumber>(testData)(
        'add one',
        (numberIn, numberOut) => {
            expect(index.addOne(numberIn)).toBe(numberOut);
        }
    );
});