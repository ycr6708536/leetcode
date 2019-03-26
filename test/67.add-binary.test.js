var addBinary = require('../src/67.add-binary');

test('addBinary "1010" + "1011" to equal "10101"', () => {
    expect(addBinary("1010", "1011")).toEqual("10101");
});