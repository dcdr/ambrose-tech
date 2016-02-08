'use strict';

// Functions defined on the prototype operate on the 'this' variable.
// For example, when "rah".repeat(3) is executed, a variable
// named 'this' is automatically declared within the function repeat()
// that has the value "rah". The repeat() function might be implemented
// something like:
//
// String.prototype.repeat = funtion(count) {
//   var output = '';
//   if (count < 0) return new RangeError();
//   while(count-- > 0) {
//     output += output + this;
//   }
//   return output;
// }
//
// "rah ".repeat(3);        // "rah rah rah "
//
// Note how the 'this' variable is not explicitly declared. It's just
// available to the function.

// Assignment: Implement the String myIndexOf() and mySlice() functions.

String.prototype.myIndexOf = function(match) {

}

String.prototype.mySlice = function(start, end) {

}
