const calculator = require("../src/BMI");

describe('BMI', () => {
    var BVAdata = [
        [-1, 65, "Please provide a valid height"],
        [160, -1, "Please provide a valid weight"],
        [NaN, 75, "Please provide a valid height"],
        [155, NaN, "Please provide a valid weight"],
        ['', 75, "Please provide a valid height"],
        [155, '', "Please provide a valid weight"],
        [155, 0, "0.00"],
        [0, 1, "Infinity"],
        [175, 70, "22.86"]
    ]

    describe.each(BVAdata)('BVA: add(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.calculateBMI(a,b)}`, () => {
            expect(calculator.calculateBMI(a, b)).toBe(expected);
        });
    })

    // var DTdata = [
    //     [-1, 65, "Please provide a valid height"],
    //     [160, -1, "Please provide a valid weight"],
    //     [180, 75, "23.15"],
    //     [155, 50, "20.81"],
    //     [175, 70, "22.86"]
    // ]

    // describe.each(DTdata)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
    //     test(`returns ${calculator.calculateBMI(a,b)}`, () => {
    //         expect(calculator.calculateBMI(a, b)).toBe(expected);
    //     });
    // })
});
