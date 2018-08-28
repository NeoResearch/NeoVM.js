// NeoVM implementation on javascript
// Igor M. Coelho, Copyleft 2018 - MIT License

(function(exports) {
"use strict";

const csBigInteger = require('csbiginteger').csBigInteger;

// virtual class
function StackItem() {
/*
    //console.log("n="+n);
		//console.log("typeof n="+(typeof n));
		//console.log(Object.prototype.toString.call(n));
		if (n instanceof csBigInteger)
			return n;
		else if (typeof n === "undefined")
			return ZERO;
    //else if (typeof n === "number")
		//	this._data = n;
    else if ((typeof n === "string") || (Object.prototype.toString.call(n) === '[object Array]'))
      return csBigInteger.parse(n, base);

  //console.log("default assign n="+n);
	this._data = n; // assign anyway (should be 'number')
   */
}

StackItem._construct = function(n) {
  return null;
	//return new csBigInteger(n);
};

// parameter: StackItem other, or object
// returns: bool
//public abstract bool Equals(StackItem other);
StackItem.prototype.Equals = function(other) {
   return true;
}

/*
public sealed override bool Equals(object obj)
{
    if (obj == null) return false;
    if (obj == this) return true;
    if (obj is StackItem other)
        return Equals(other);
    return false;
}
*/

/*
public static StackItem FromInterface(IInteropInterface value)
{
    return new InteropInterface(value);
}
*/

/*
public virtual BigInteger GetBigInteger()
{
    return new BigInteger(GetByteArray());
}
*/
StackItem.prototype.GetBigInteger = function() {
   return new csBigInteger(this.GetByteArray());
}

/*
public virtual bool GetBoolean()
{
    return GetByteArray().Any(p => p != 0);
}
*/
StackItem.prototype.GetBoolean = function() {
   var ba = this.GetByteArray();
   for(var i=0; i<ba.size(); i++)
      if(ba[i] != 0)
        return true;
   return false;
}

//public abstract byte[] GetByteArray();
StackItem.prototype.GetByteArray = function() {
   return null;
}

/*
public override int GetHashCode()
{
    unchecked
    {
        int hash = 17;
        foreach (byte element in GetByteArray())
            hash = hash * 31 + element;
        return hash;
    }
}
*/

/*
public virtual string GetString()
{
    return Encoding.UTF8.GetString(GetByteArray());
}
*/
StackItem.prototype.GetString = function() {
   var ba = this.GetByteArray();
   var str = ""; // ASCII
   for(var i=0; i<ba.length; i++)
      str += String.fromCharCode(ba[i]);
   return str;
}

/*
public static implicit operator StackItem(int value)
{
    return (BigInteger)value;
}

public static implicit operator StackItem(uint value)
{
    return (BigInteger)value;
}

public static implicit operator StackItem(long value)
{
    return (BigInteger)value;
}

public static implicit operator StackItem(ulong value)
{
    return (BigInteger)value;
}

public static implicit operator StackItem(BigInteger value)
{
    return new Integer(value);
}

public static implicit operator StackItem(bool value)
{
    return new Boolean(value);
}

public static implicit operator StackItem(byte[] value)
{
    return new ByteArray(value);
}

public static implicit operator StackItem(StackItem[] value)
{
    return new Array(value);
}

public static implicit operator StackItem(List<StackItem> value)
{
    return new Array(value);
}
*/


StackItem.prototype.toString = function() {
  return this.GetString();
};

StackItem.prototype.valueOf = function() {
  return this.GetBigInteger();
};

exports.StackItem = StackItem;
})(typeof exports !== 'undefined' ? exports : this);
