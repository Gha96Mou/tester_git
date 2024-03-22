const chunkArray = require('./chunk');

test ('chunkArray', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const len = 3;
    expect(chunkArray(arr, len)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
})
