const cloneArray = require("./cloneArray")

test('properly clones array', ()=> {
    const array = [1,2,3]

    // just a copy
    expect(cloneArray(array)).toEqual(array)
    // not exactly the same array
    expect(cloneArray(array)).not.toBe(array)
})