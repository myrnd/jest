//const { describe, test, expect } = require("jest");

describe('COMMON MATCHERS', () => {
    test('toBe', () => expect(2+3).toBe(5));
    test('not.toBe', () => expect(2+3).not.toBe(4));
    test('toBeNull', () => expect(null).toBeNull());

    var x = 20;

    test('toBeDefined', () => expect(x).toBeDefined());

    xtest('toBeUndefined', () => expect(undefined).toBeUndefined());
    xtest('toBeTruthy', () => expect(true).toBeTruthy());
    test('toBeFalsy', () => expect(false).toBeFalsy());

});