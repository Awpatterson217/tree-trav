# tree-trav
A library to handle nested directory structures in Node.js using the <a href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter API</a> and recursion. 
<br>
<br>
<a href="https://badge.fury.io/js/tree-trav"><img src="https://badge.fury.io/js/tree-trav.svg" alt="npm version" height="18"></a>
<a href="https://github.com/Awpatterson217/tree-trav/blob/master/LICENSE.MIT"><img src="https://img.shields.io/npm/l/express.svg" alt="npm version" height="18"></a>
<a href="https://github.com/Awpatterson217/tree-trav/blob/master/LICENSE.APACHE2"><img src="https://img.shields.io/hexpm/l/plug.svg" alt="npm version" height="18"></a>
<br>
<hr>
<br>

```js
npm install tree-trav
```

<br>
 <a href="https://github.com/Awpatterson217/tree-trav/blob/master/lib/tree-trav/README.md">
API Reference
</a>
<br>
<hr>

### Example Usage:

```js
const Tree = require('tree-trav').Tree;

// Find all CSS and HTML files in a 
// nested file structure
myTree.getLeaves('example/root/', [
    '.css',
    '.html'
]);

// Deal with files as they are found
myTree.on('dirFound', directory =>{
    console.log("directory: " + directory);
});

// Deal with files when the search is complete
myTree.on('autumn', (errors, files, extensionsMatched) =>{
    console.log("Files found: "           + files);
    console.log("Number of Files found: " + files.length);
    console.log("Extensions Matched: "    + extensionsMatched);
    if(errors.length){
        console.log("Number of errors: "  + errors.length);
        console.log("Reasons for error: " + errors[0].msg);
        console.log("Location of error: " + errors[0].path);
    }
});

```

<br>
Contributors Welcome!
