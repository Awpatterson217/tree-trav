# forest
A library to handle nested directory structures in Node.js using the <a href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter API</a> and recursion. 
<br>
<br>
<a href="https://badge.fury.io/js/forest"><img src="https://badge.fury.io/js/forest.svg" alt="npm version" height="18"></a>
<a href="https://github.com/Awpatterson217/forest/blob/master/LICENSE.MIT"><img src="https://img.shields.io/npm/l/express.svg" alt="npm version" height="18"></a>
<a href="https://github.com/Awpatterson217/forest/blob/master/LICENSE.APACHE2"><img src="https://img.shields.io/hexpm/l/plug.svg" alt="npm version" height="18"></a>
<br>
<hr>
<br>

```js
npm install forest
```

<br>
 <a href="https://github.com/Awpatterson217/forest/blob/master/lib/forest/README.md">
API Reference
</a>
<br>
<hr>

### Example Usage:

```js
const Tree = require('forest').Tree;

// Find all CSS and HTML files in a 
// nested file structure
myTree.getLeaves('example/root/', [
    '.css',
    '.html'
]);

// Deal with files asynchronously
myTree.on('file', (file, dir, extension) =>{



});

```

<br>
Contributors Welcome!
