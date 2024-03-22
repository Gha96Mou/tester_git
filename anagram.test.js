const anagram = require('./anagram');

test('anagram test', () => {
    expect(anagram('hello', 'olleh')).toBe(true)
    expect(anagram('hello', 'helloo')).toBe(false)
    expect(anagram('hello', 'hellllo')).toBe(false)
})