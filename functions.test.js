const {add} = require("./functions");

test('Adds 2 + 2 equals 4', () =>{
    expect(add(2,2)).toBe(4);
})

test('Adds 2 + 2 is NOT Equal 5', () =>{
    expect(add(2,2)).not.toBe(5);
})
