# Introduction to DOM Manipulation

- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

## Goals:
- Identifying the DOM 
- Focusing on key terminology/methods used in DOM manipulation 
- Access, add, alter and remove DOM elements

    ### What is the DOM?
    - DOM stands for Document Object Model
    - It is a programming interface of your HTML or XML that is created by the browser
    - The DOM is a tree of nodes and each node has its own properties and methods
    - These nodes also have relationships to one another
    - Element relationships can be really useful for traversing the DOM. This means accessing elements from other elements 

    ### How to access elements
    - `document.getElementById()` 
        - accepts id as an argument
        - returns first match 
    - `document.getElementsByClassName()` 
        - accepts class as an argument
        - returns an HTMLcollection 
    - `document.getElementsByTagName()`
        - accepts tag name as an argument
        - returns an HTMLcollection
    - `document.querySelector()`
        - returns the first value that matches the provided selector. 
        - This selector accepts tag names, class names and id’s
    - `document.querySelectorAll()` 
        - returns a node list that matches the provided selector

    ### Traversing the DOM
    - If moving down the tree, we can use:
        - `.children`, `.querySelector`, `.querySelectorAll`
    - If moving up, we can use
        - `.parentElement` or `.closest`
    - We can also traverse sideways
        - `nextElementSibling`, `previousElementSibling`

    ### Adding/Altering Elements on the DOM
    - `document.createElement()`
    - `innerHTML`
    - difference between `+=` and `=`

    ### Removing elements from the DOM
    - `.remove()`
