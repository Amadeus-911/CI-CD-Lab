// @ts-nocheck
const calculator = require("../src/advanced");

// describe('Pow', () => {
//     var BVAdata = [
//         [1,2,1],
//         [4,2,16],
//         [3,2,9],
//         [2,3,8]
//     ]

//     describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (a, b, expected) => {
//         test(`returns ${calculator.pow(a,b)}`, () => {
//             expect(calculator.pow(a, b)).toBe(expected);
//         });
//     })

//     var DTdata = [
//         [0, 89, 0],
//         [2, 0, 1],
//         [6, -1, 0.166666666666667],
//     ]

//     describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (a, b, expected) => {
//         test(`returns ${calculator.pow(a,b)}`, () => {
//             expect(calculator.pow(a, b)).toBe(expected);
//         });
//     })
// });

describe('Modulo', () => {
    var BVAdata = [
        [2,2,0],
        [4,4,0],
        [12,12,0],
        [8,6,2]
    ]

    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    })

    var DTdata = [
        [89, 89, 0],
        [4, 3, 1],
        [12, 11, 1],
        [8, 5, 3]
    ]

    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a,b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    })
});