# Hello World! Browser-based

This first example shows a small HTML file with a one-line Javascript app embedded within the <script></script> tags. The alert() function displays the text 'Hello, World!' in a pop up alert box.

Open this file at /src/lessons/00/hello.html.

```
<!DOCTYPE HTML>
<html>
<body>

  <p>First browser-based app.</p>
 
  <script>
    alert('Hello, World!');
  </script>
 
</body>
</html>
```

The ``<!DOCTYPE HTML>`` tag identifies the document as HTML 5. All HTML documents contain required ``<html>`` and ``<body`` tags. An optional ``<header>`` tag may precede the ``<body>`` tag to include CSS, Javascript and meta data.

Generally speaking, Javascript used across many applications, called libraries, are included in the ``<header>``, Javascript code specific to the application is included in the ``<body>``.
