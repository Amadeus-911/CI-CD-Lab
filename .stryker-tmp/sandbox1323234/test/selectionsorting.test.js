// @ts-nocheck
const calculator = require("../src/selectionSorting");

describe('BMI', () => {
    var BVAdata = [
        [[45, 12, 78, 23, 56],[12, 23, 45, 56, 78]],
        [[45, 12, 12, 23, 56],[12, 12, 23, 45, 56,]],
        [[8, 42, 17, 42, 11],[8, 11, 17, 42, 42]],
        [[64, 29, 51, 16, 33],[16, 29, 33, 51, 64]],
        [[95, 27, 13, 68, 5],[5, 13, 27, 68, 95]]
    ]

    describe.each(BVAdata)('BVA: sort(%i), Expected: %i', (a, expected) => {
        test(`returns ${calculator.selectionSort(a)}`, () => {
            expect(calculator.selectionSort(a)).toStrictEqual(expected);
        });
    })

    // var DTdata = [
    //     [[45, 12, 78, 23, 56],[12, 23, 45, 56, 78]],
    //     [[8, 3, 17, 42, 11],[3, 8, 11, 17, 42]],
    //     [[64, 29, 51, 16, 33],[16, 29, 33, 51, 64]],
    //     [[95, 27, 13, 68, 5],[5, 13, 27, 68, 95]]
    // ]

    // describe.each(DTdata)('DT: sort(%i), Expected: %i', (a, expected) => {
    //     console.log(a, expected)
    //     test(`returns ${calculator.insertionSort(a)}`, () => {
    //         expect(calculator.insertionSort(a)).toStrictEqual(expected);
    //     });
    // })
});
