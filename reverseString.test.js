const reverseString  = require("./reverseString");

test('reverseString hello is olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverseString hello world is dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});
