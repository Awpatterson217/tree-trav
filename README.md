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
 <a href="https://github.com/Awpatterson217/tree-trav/blob/master/lib/tree/README.md">
Tree API Documentation
</a>
<br>
<hr>

### Example Usage:

```js
const Tree = require('tree-trav').Tree;
let myTree = new Tree();

let stylesheets = [];
let jsFiles     = [];

// Find all CSS and js files in a 
// nested file structure
myTree.getLeaves('example/root/', [
    '.css',
    '.js'
]);

// Deal with files as they are found
myTree.on('file', (file, dir, extension) =>{
    if(extension === '.js') 
        jsFiles.push(file);

    if(extension === '.css') 
        stylesheets.push(file);
});

```

<br>
Contributors Welcome!
