# Introduction to Javascript

Javascript is an interpreted language that was originally designed to run in the Mozilla web browser. It was quickly adopted
by other browser developers and standarized. It eventually made its way onto the desktop in the form of Node.js where it is
used to power may popular websites such as Netflix, Walmart, Ebay and others.

Javascript's syntax closely resembles the C language, but Javascript is object oriented and supports inheritance by prototype.

Javascript's basic data types are:

Type|Example
---|---
number| 1, 1.0
string| "a string"
boolean| ``true``, ``false``
function| ``function()``
object| ``{ firstName: 'Buck', lastName: 'Rogers' }``

# Expressions

Expressions are fragments of code that can be evaluated to some value. For example, 1 and "One" are expressions of the number one and the string one, respectively. Expressions can include operators, for example 1 + 2 and "One" + " great thing" will evaluate to the number 3 and the string "One great thing", respectively.

**Numeric Operators**

Operator|Use|Operator|Use
---|---|---|---
+|Addition|-|Subtraction
*|Multiplication|/|Division
++|Increment|--|Decrement
%|Modulus (remainder)| |

Strings can be concatenated using the + operator.

**Comparison Operators**

Operator|Use|Operator|Use
---|---|---|---
==|Equal value|===|Equal value and type
!=|Not equal value|!==|Not equal value or type
<|Less than|>|Greater than
<=|Less than or equal|>=|Greater than or equal

The === and !=== operators are of special note. They compare type as well as value. This is because some types can be
automatically coerced (changed) into other types. For example, numbers will be coerced to strings when concatenated to 
another string, for example the number 1 in "1" + 1 is coerced to "1" yielding the string "11". Similarly, "1" == 1 is
true, but "1" === 1 is false. In almost all cases you want the latter so *it is a best practice to use === and !== unless
you are certain that coercion is desirable*.

**Assignment Operators**

Operator|Use|Example|Equivalent to
---|---|---|---
=|Assignment|x=1|
+=|Add and assign|x += 1|x = x + 1
-=|Subtract and assign|x -= 1|x = x - 1
*=|Multiply and assign|x *= 2|x = x * 2
/=|Divide and assign|x /= 2|x = x / 2
%=|Modulus and assign|x %= 2|x = x % 2

Expressions can be used as conditionals in ``if`` statements and ``while`` and ``for`` loops, assigned to a variable and passed as parameters to a function.

# Statements

Statements are used to accomplish a task. These include assignments, loops, if statements and invoking functions. Here
are a few examples:

```
var a = 1;

if (a === 1) {
  console.log('The variable a equals 1`);
}

for (a=0; a < 10; a++) {
  console.log(a);
}

function doubleIt(num) {
  return 2*num;
}

doubleIt(a);
```

# Variables and Scope

Expression values may be assigned to variables. Variable names begin with a letter, dollar sign or underscore and may contain
any number of letters, digits, dollar signs or underscores.

Variables should always be declared using ``var``. Variables are active within the scope in which they are defined. Identifiers, 
which include variable names and function names, defined in the global scope are accessible anywhere within a program provided
they are not hidden by indentifier of the same name in a more recent scope.

In the current version of Javascript, scope is changed within a function. So there are two distinct variables ``a`` in the
following example:
```
var a = 1;

function b() {
  var a = 2;
  
  console.log(a);       // outputs 2
}
```
In this example, the variable ``a`` inside the scope of the ``function b()`` hides the variable ``a`` outside in
the global scope outside of the function. When the ``console.log(a);`` statement executes, it uses the variable ``a`` of
the nearest scope--the one inside the function--and outputs the value 2.

# Running Javascript in the Browser

This first example shows a small HTML file with a one-line Javascript app embedded within the <script></script> tags. The alert() function displays the text 'Hello, World!' in a pop up alert box.

Open this file at /src/lessons/00/hello.html.

```
<!DOCTYPE HTML>
<html>
<body>

  // First browser-based app.
 
  <script>
    alert('Hello, World!');
  </script>
 
</body>
</html>
```

The ``<!DOCTYPE HTML>`` tag identifies the document as HTML 5. All HTML documents contain required ``<html></html>`` and ``<body></body>`` tags. Optional ``<header></header>`` tags precede the ``<body></body>`` tags to include CSS, Javascript
libraries and meta data.

Javascript is added to HTML files using ``<script/>`` tags. Several ``<script/>`` tags can work together to form one program.

## Assignment - 10 points

Your assignment is to:

1. [Check out the ambrose-tech repository](/tools/git-clone.md).
2. [Create a branch](/tools/git-branch.md).
3. Modify the alert to read "Hello, Mr. Bergstrand!".
4. [Commit and sync your changes](/tools/git-commit.md).
5. [Create a pull request](/tools/git-pull-request.md).
