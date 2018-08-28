// NeoVM implementation on javascript
// Igor M. Coelho, Copyleft 2018 - MIT License

(function(exports) {
"use strict";


function ExecutionEngine(n, base = 10) {

}

ExecutionEngine._construct = function(n) {
	//return new csBigInteger(n);
};

ExecutionEngine.prototype.toString = function(base=10) {
  return "";
};


ExecutionEngine.prototype.valueOf = function() {
  return 0;
};

exports.ExecutionEngine = ExecutionEngine;
})(typeof exports !== 'undefined' ? exports : this);
