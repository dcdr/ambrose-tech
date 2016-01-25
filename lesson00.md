# Hello World! Browser-based

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

The ``<!DOCTYPE HTML>`` tag identifies the document as HTML 5. All HTML documents contain required ``<html></html>`` and ``<body></body>`` tags. Optional ``<header></header>`` tags may precede the ``<body></body>`` tags to include CSS, Javascript and meta data.

Very few modern programs are written completely from scratch. In fact, the vast majority of the code that goes into an application is code that is written and shared by others. This code is called library code. It is included in the ``<header></header>`` section. The code specific to the application is included at the bottom of the ``<body></body>`` section.

# Variables, Scope, Expressions and Statements
The follow file contains a number of <script/> tags that work together to form one program.

The first script tag declares a variable labeled "a". The variable is in the global scope. More on scope later. The variable ``a`` is assigned an integer value of 1 using the assignment operator "=". An assignment operation is called a statement.

Statements are typically separated by semicolons. However, many statements do not require semicolons and, except in some rare cases, semicolons are optional. That said, it's still a good practice to use them as it improves the readability of code.

The second ``<script>`` tag invoke the log() function from the console object. More on objects in future lesson. The log() function prints the parameters passed to it to the console window. The console window can be seen by right clicking in the window and selecting Inspect from the context menu.

The third ``<script>`` tag defines a function named showIt() that takes a single parameter. The function converts the parameter to a string and then prints it to the console. In reality, this is unnecessary as console.log() prints all parameter types. But it serves to demonstrate how Javascript can convert types, particular to strings.

The fourth ``<script>`` tag invokes the showIt() function and provides the first demonstration of scope. Note how it attempts to pass the variable d to the console.log() function. The attempt will fail however, because the variable d is defined within the scope of the showIt() function. Variables can only be used in the scope in which they are defined.

One final note is that all tags with an id create a variable in the global scope that is assigned a value matching the content of the tag. In the example, a variable b is created in the global scope with the value 1.
```
<!DOCTYPE HTML>
<html>
<body>
  <script>
    var a = 1;
  </script>
  <script>
    console.log("The value of a is: " + a);
  </script>
  <script>
    function showIt(c) {
      var d = "" + c;
      console.log(d);
    }
  </script>
  <script>
    showIt(10);
    console.log(d);     // An error. d is only valid within the scope of the function showIt().
  </script>
  <div id="b">1</div>
</body>
</html>
```

