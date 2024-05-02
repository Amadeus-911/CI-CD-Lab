const calculator = require("../src/lenConverter");

describe('BMI', () => {
    var BVAdata = [
        ["feets", 3, [ '36.00 inches', '0.00 miles' ]],
        ["inches", 12, [ '1.00 feets', '0.00 miles' ]],
        ["miles", 1, [ '5280.00 feets', '63360.00 inches' ]]
        ["mil", 1, "wrong input"],
    ]

    describe.each(BVAdata)('BVA: sort(%i), Expected: %i', (a,b, expected) => {
        console.log(expected)
        test(`returns ${calculator.LengthConverter(a,b)}`, () => {
            expect(calculator.LengthConverter(a,b)).toEqual(expected);
        });
    })
})