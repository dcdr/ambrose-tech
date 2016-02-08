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

There are a number of builtin functions on [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
and [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). String functions include
``toLowerCase`` and ``toUpperCase`` to convert all of the strings character to lower case or upper case respectively. Array functions
include ``indexOf`` and ``reverse`` to find an item in the array and to reverse the items in the array respectively.

The examples in the prior section operated on one of the parameters. Functions can be define on objects and invoked
directly on those objects. This is accomplished, in part, by assigning functions to the object's prototype. The prototype 
contains a map of functions that are assigned to every new instance of that object's type.

Below we'll assign the functions to the prototype and then ovoke the functions on instances of the objects.
```
String.prototype.isEvenLength = function() {
  return 0 === this.length % 2;
}

String.prototype.startsWith = function(b) {
  return this[0] === b;
}

Array.prototype.aggregate = function(initial, accumulator) {
  if (undefined === accumulator) accumulator = function(x, y) { return x + y; }
  var result = initial;
  for(var i=0; i<this.length; i++) {
    result = accumulator(result, this[i]);
  }
  return result;
}

var isEven = "stop.isEvenLength();                    // true
var firstLetterIsT = "stop".startsWith("T");          // false
var value = [1, 2, 3, 4, 5].aggregate(0);             // 15
```

Assignment - 10 points

Implement the string functions myIndexOf() and mySlice() and array functions myIndexOf() and myReverse().

See [Array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for a description
of the indexOf() and reverse() functions. Your myIndexOf() and myReverse() function should mimic these functions. Do not use them
in your implementation.
See [String functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for a description
of the indexOf() or slice() functions. Your myIndexOf() and mySlice() functions should mimic these functions. Do not use them
in your implementation.

1. [Clone the ambrose-tech repository](tools/git-clone.md) if you haven't yet.
2. [Create a branch](tools/git-branch.md).
3. Open the src/lessons/02/jasmine.html file in a browser. Note the failures.
4. Open the string.js file in Atom. Implement the myIndexOf() and mySlice() functions.
5. Reload the jasmine.html file to test your implementation.
6. Open the array.js file in Atom. Implement the myIndexOf() and myReverse() functions.
7. Reload the jasmine.html file to test your implementation.
8. [Commit your changes](tools/git-commit.md).
9. [Issue a pull request](tools/git-pull-request.md).
