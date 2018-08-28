const Integer = require('./Integer').Integer;
const csBigInteger = require('csbiginteger').csBigInteger;

test('constructor Integer() equals zero', () => {
  expect(new Integer().valueOf()).toBe(csBigInteger.ZERO);
});
