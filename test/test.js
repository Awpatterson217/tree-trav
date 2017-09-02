"use strict";

const forest = require('../');
const Tree   = require('../').Tree;

// WORKS
//let myTree = new forest.Tree();
// WORKS
let myTree = new Tree();

const Extensions = ['.js', '.css']; 
const root       = 'testFolders';
const ignorees   = ['C:/src/customshells'];

// Works
myTree.getBranch(root, ignorees);
//myTree.getLeaves(root, Extensions);

//myTree.fertilize(int); // TODO?

// BRANCH
myTree.on('dir', directory =>{
    console.log("directory: " + directory);
});

// BRANCH 
myTree.on('gathered', (errors, directories) => {
    console.log("Directories Found: "           + directories);
    console.log("Number of Directories Found: " + directories.length);    
    if(errors.length){
        console.log("Number of errors: "  + errors.length);
        console.log("Reasons for error: " + errors[0].msg);
        console.log("Location of error: " + errors[0].path);
    }
});

// LEAVES
myTree.on('file', (file, dir, extension) =>{
    console.log("File: "      + file);
    console.log("dir: "       + dir);
    console.log("Extension: " + extension);
});

// LEAVES
myTree.on('dirFound', directory =>{
    console.log("directory: " + directory);
});

// LEAVES
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
