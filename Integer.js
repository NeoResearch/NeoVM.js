// NeoVM implementation on javascript
// Igor M. Coelho, Copyleft 2018 - MIT License

(function(exports) {
"use strict";

const StackItem = require('./StackItem').StackItem;
const csBigInteger = require('csbiginteger').csBigInteger;

//public Integer(BigInteger value)
function Integer(v) {
  if (v instanceof csBigInteger)
    this.value = v;
  this.value = csBigInteger.ZERO;
}

Integer._construct = function(n) {
	return new Integer(n);
};




Integer.prototype.toString = function() {
  return "";//this.GetString();
};

Integer.prototype.valueOf = function() {
  return this.value;
};

exports.Integer = Integer;
})(typeof exports !== 'undefined' ? exports : this);
