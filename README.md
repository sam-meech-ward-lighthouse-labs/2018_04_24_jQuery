# jQuery 

Why does it exist?
  - Browser compatibility 
  - Easier syntax. 
  - We can write less code that does... actually the same amount.
How much additional behavior does it add to the browser?
  - Doesn't add anything new.
Library or framework? Why?
  - https://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/
What is $ or jQuery in code exactly? How does it work?
jQuery vs jQueryUI
Why is it important to learn / use jQuery ?
Event handling with jQuery
Element creation with jQuery
Alternatives?

### CDN

content delivery network

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`

- if cached, will make faster, because less downloads.
- saves stuff that you've downloaded before.

## `$`and jQuery

They are the same thing. Usually use `$` because it's arguably nicer. 

$ is a function

## 4 things you pass to the query function 

### A function: 

```
$(function() {});
```

Will get called when the dom content has loaded 

`document.addEventListener("DOMContentLoaded");`

### A CSS Selector:

```
$("#joel"); 
```

- It finds the DOM element with that id and returns a jQuery result. 

### An HTML tag:

```
$("<div>");
```
- it creates a new DOM element and returns a jQuery result for that element.

### A native dom element:

```
var joel document.querySelector('#joel');
$(joel);
```

- This will returns a jQuery result for that element.

## Chaining

- Most methods that you call on the jQuery object, return that jQuery object. 

See code for example

## Event Handling & Delegation

`addEventListener`
`on`

## Plugins



