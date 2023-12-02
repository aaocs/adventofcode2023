import {readCalibrationValues} from './day1part1';

function problem1part1(): void {
    const answer: number = readCalibrationValues('./src/resources/calibrationValues');
    console.log(`Day 1 part 1 solution: ${answer}`);
}

problem1part1();
