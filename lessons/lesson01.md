# HTML/CSS/Javascript and Testing

[Lesson 00](lesson00.md) contained a brief introduction to HTML and Javascript via the Hello World! example. We will build
on that introduction using an HTML form to test if a word is a palindrome.

If you haven't already [cloned the repository](/tools/git-clone.md), do so now. [Create a branch](/tools/git-branch.md). Name your branches using the pattern <your name or initials>-<reason for the branch>. For example, tbergstrand-lesson01.

To setup for this lesson:

1. Open the GitHub Atom application.
2. Open the src/lessons/01 directory. 
3. Open the palindrome.html and palindrome.js files.
4. Right-click on palindrome.html and select "Open in Finder" (Mac) or "Open in File Explorer" (Windows). 
5. Double click on the palindrome.html file to open it in a browser. 
6. Right-click in the window and select Inspect.

## Palindrome.html

This lesson introduces the AngularJS library. This library simplifies the creation of modern single-page web applications. We won't get into too much of the detail about Angular just yet. For this example, we'll show how Angular can be used to manage the state (active data) of the view and how it modularizes (groups together) functions that affect the view.

Open the Elements tab and then open the ``<head></head>`` tag. Here you'll find a ``<script></script>`` tag that loads the Angular library and makes it available to our application.

``<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>``

Open the ``<body></body>`` tags. The Angular library is directed to operate on the view (HTML) rooted at the tag containing the "ng-app" attribute. This is listed in the first ``<div>`` of the HTML file.

The HTML creates a view that prompts the user to enter text that is tested to determine if it is a palindrome--a word or phrase that is spelled the same forwards and backwards.

Enter some text that you believe is a palindrome. Note how after entering the first character, the view is already evaluating the text and may display a different result "Is a palindrome." or "Is not a palindrome." as you type.

This is a demonstration of Angular's powerful two-way data binding. In one direction, Angular puts data into the view. In this case, our app starts out with an empty string. In the other direction, Angular updates the model so that the application can evaluate it.

Model data is declared in the view using the ng-model attribute. You'll find this in the ``<input>`` tag. Angular copies the data entered into the ``<input>`` field into the p.palindrome variable. This variable is defined inside of the PalindromeController and this controller is activated through the use of the ng-controller attribute of the enclosing ``<div>``. Note the use of the "<controllerName> as <variableName" construct. In this case, ng-controller="PalindromeController as p". This allows us to review to the model data defined in the PalindromeController using the variable name "p" and this is the "p" you see in the ng-model="p.palindrome" attribute.

Now find the ``<div ng-hide="!p.palindrome">`` statement. The ng-hide attribute causes the enclosing element to be hidden from view if the expression "!p.palindrome" evaluates to true, which is this case is true if the model data p.palindrome has an empty value. As soon as you add one character to the text box, the expression evaluates to false cause ng-hide to fail and now the ``<div>`` is presented. 

The ng-show attribute has the opposite effect of ng-hide causing the enclosing element to be visible only if the expression evaluates to true. The ng-show attribute is used twice  to select between presenting either the "Is a palindrome." or "Is not a palindrome." strings via the p.isPalindrome() function.

## Palindrome.js

Now take a look at palindrome.js. The file implements an Angular controller. Angular controllers manage retrieving data from the server that is to be displayed in the view, sending the data entered into a view back to the server and all of the business logic that evaluates the data before it heads off in either direction.

In this case, our controller need not communicate with a server. It manages the model data internally. 

A best practice in Angular, and in Javascript in general, is to set the value of the ``this`` variable to a local variable. The ``this`` variable is set to the current object under control. In this case, it's the function() that implements the PalindromeController.

One way to create model data in the controller is to assign a field to the ``this`` object, or now the object held in the ``vm`` variable (short for view model). Fields created on the ``this`` object are available to any view using the controller. The PalindromeController creates two fields, a ``palindrome`` variable and a ``isPalindrome()`` function. We already saw how these were being used in the view.

## Palindrome.controller.tests.js

Next open the palindrome.controller.tests.js file that defines a set of tests for the PalindromeController code. There's a little bit of magic in this file that we won't cover just yet. For now, let's focus on the ``describe()`` and ``it()`` functions. These are defined by the Jasmine Behavior Driven Design (BDD) testing framework. The ``describe()`` function declares a test suite. The ``it()`` functions define individual tests. BDD testing frameworks are designed to enable a fairly explicit natural language description of the tests.

I've defined three tests. The first is intended to validate that "tatbctat" is not a palidrome. The second that "tattarrattat" is a palindrome. And the third that "A Man, A Plan, A Canal-Panama!" is a palindrome.

Generally, we run these tests as part of the build tools, but for this lesson, we'll run them in a browser.

## Jasmine.html

Open the Jasmine.html file in your browser. This will automatically run the tests and report the results.

You will see that two of the three tests fail. In reality, all three tests are failing, because the first test is returning a false positive--isPalindrome() is returning false, but for the wrong reason.

## Assignment

Your assignment is to:

1. Find and correct the defect in the isPalindrome() function.
2. Add at least one more unit tests (``it()`` function).

and for an additional 10 points

3. Modify isPalindrome() so that the "A Man, A Plan, A Canal-Panama!" is a palindrome test passes.

Hints

1. The defect is related to the fact that indexing characters in a string is zero-based. That is, the first character in a string is at index [0]. Thus, if a string is four (4) characters long, the last character in the string is at index [3] (or [4-1] to be more precise).

2. There are several additional tests that ought to be added. The first would be to test that isPalindrome() returns false if the model data (palindrome) is set to an empty string. This will require modifying the isPalidrome() function accoringly. The second would be to testing whether a word with an odd number of characters is or is not a palindrome. A third would be to add negative (is not a palindrome) cases.

3. Testing that a phrase as a palindrome requires ignoring (skipping over) spaces and punctuation and ignoring differences in case. 

Important

To complete this assignment, you must commit (save) your changes to your local repository using GitHub Desktop and then submit a Pull Request. This will cause an email to be sent to me to review your code. Typically, a reviewer will merge the submittal if the submitted code is acceptable. I will not do that in these cases. So don't be bothered if you see that your pull request is rejected. It just means that I finished evaluating your submittal. I'll let you know if you passed our not via email separately.
