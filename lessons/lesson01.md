# Strings and Arrays

Strings and arrays are closely related in Javascript, as well as many other programming languages. The primary difference is that
a string is an array of characters and may only contain characters, while the more general array may contain elements of any other
supported type include other arrays. In many languages, any given array may only contain elements of one type and are of a fixed size.
Each element of a Javascript array may be of a different type and the array may grow in size as needed.

Indexing of arrays (and strings) are zero-indexed. That means the first element (or character) is accessed at the 0 index. For example,
the first element in the array below is accessed using ``myArray[0]``. The length of an array is retrieved using the ``length`` member.
The last element in the array is accessed using ``myArray[myArray.length-1]``.

```
var myArray=[10, 20, 30, 40];
var first = myArray[0];         // 10
var length = myArray.length;    // 4
var last = myArray[length-1];   // 40
```

index|0|1|2|3
---|---|---|---|---
myArray|10|20|30|40

Note that length of an array indicates the last indexable value. It does not indicate how many items are defined in the array.
For example, if we add an element at index 9, then there will be five elements defined in the array, but the length of the
array is 10.

```
myArray[9] = 90;
length = myArray.length;        // 10
```
index|0|1|2|3|4|5|6|7|8|9
---|---|---|---|---|---|---|---|---|---|---
myArray|10|20|30|40|undefined|undefined|undefined|undefined|undefined|90

There are a number of ways to iterate over the values of an array. The first is with a for loop. 
```
for(var i=0; i<myArray.length; i++) {
   console.log(myArray[i]);
}
// 10, 20, 30, 40, undefined, undefined, undefined, undefined, 90
```

A second way is with the ``for in`` loop.
```
for(var i in myArray) {
  console.log(myArray[i]);
}
// 10, 20, 30, 40, 90, undefined
```

Notice that ``for in`` loop skips over the undefined elements in the array, but then adds an undefined at the end. This is
because ``for in`` loop is immediately designed to work with objects, but it works with arrays because arrays are objects.
And because arrays are objects, you can do something like:
```
myArray.aField="a string";
for(var i in myArray) {
  console.log(myArray[i]);
}
// 10, 20, 30, 40, 90, "a string", undefined
```

# Functions
Functions are named blocks of statements that can take parameters and optionally return a value. Here are
some examples.
```
function isEvenLength(s) {              // this is a function definition
  return 0 === s.length % 2;
}

var startsWith = function(a, b) {       // this is a function expression
  return a[0] === b;
}

function aggregate(a, initial, accumulator) {
  if (false === a.isArray()) return undefined;
  if (undefined === accumulator) accumulator = function(x, y) { return x + y; }
  var result = initial;
  for(var i=0; i<a.length; i++) {
    result = accumulator(result, a[i]);
  }
  return result;
}
```
The first example is a function definition. The function name is ``isEvenLength``. It takes one parameter, ``s``. The
function returns a boolean (``true`` or ``false``) according to the value of the expression ``0 === s.length % 2``. 
``%`` is the modulo operator returning remainder of a division, in this case by 2.
```
var isEven = isEvenLength("stop");                    // true
```

The second example is a function expression. A function is anonymous when it is not assigned a name. This anonymous function is
assigned to the ``startsWith`` variable and now the variable can used as a function.
```
var firstLetterIsT = startsWith("stop", "T");         // false
```
The third example demonstrates how functions can be passed as arguments, for example:
```
var value = aggregate([1, 2, 3, 4, 5], 1, function(a,b) { return a*b; })    // 120
```
Here, an anonmymous function is passed to the aggregate() function. The function returns a value
of 120. In another example:
```
var value = aggregate([1, 2, 3, 4, 5], 0)             // 15
```
Here, the third parameter of the aggregate() function named accumulator is omitted from the invocation. The
function assigns a default anonymous function to the accumulator parameter, if the parameter is ``undefined``. 

# Objects

Objects are created using one of two syntaxes:
```
var obj1 = new Object();
var obj2 = { };
```
The second option is the more popular. 

Objects are essentially associative arrays--arrays with named indices.

Values are assigned to keys within the object using one of three syntaxes:
```
obj1['key'] = value;
obj1.key = value;
var obj3 = {
   key: value
};
```
The second should be preferred, but the first is necessary when the key is a string that is an invalid identifier, that is when it uses
a character that is not a dollar sign ($), underscore (_), a letter or a digit. For example, the key "a key" having a space must
use the array syntax, ``obj1["a key"] = value;``.

The value of a key may be another object.
```
var obj = {
   name: 'Jimmy John',
   address: {
      street: '123 Main St.',
      city: 'Boise',
      state: 'ID',
      'zip code': 83702
   }
};
```
