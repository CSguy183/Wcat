#!/usr/bin/env node

const fs = require("fs");
let args = process.argv.slice(2);
// console.log(args);

let cmds = [];
let files = [];
let secArgs = [];

for (let i of args) {
    if (i[0] == '-') cmds.push(i);
    else if (i[0] == '%') secArgs.push(i.slice(1));
    else files.push(i);
}

// console.log(cmds, files);

for (let file of files) {
    let fileData = fs.readFileSync(file, 'utf-8');
    for (let cmd of cmds) {
        if (cmd == "-rs") {                            // remove spaces
            fileData = removeAll(fileData, " ");
        }
        if (cmd == "-rnl") {                          // remove new lines
            fileData = removeAll(fileData, "\r\n");
        }
        if (cmd == "-rsc") {                          // remove specific char
            for (let secArg of secArgs) {
                fileData = removeAll(fileData, secArg);
            }
        }
        if (cmd == "-an") {                         // add number to each line
            fileData = addNumbers(fileData);
        }
        if (cmd == "-annel") {                     // add number to non empty line
            fileData = addNumberNonEmptyLine(fileData);
        }
        if (cmd == "-rls") {                        // remove large spaces
            fileData = removeLargeSpaces(fileData);
        }
    }

    // console.log(typeof(fileData));
    console.log(fileData);
}

function removeAll(s, arg) {
    return s.split(arg).join("");
}

function addNumbers(data) {
    let arr = data.split("\r\n");
    let ans = "";
    arr.forEach((ele, idx) => {
        ans += (`${idx + 1}. ${ele} `);
        ans += "\r\n";
    });

    return ans;
}

function addNumberNonEmptyLine(data) {
    let arr = data.split("\r\n");
    let arrnew = arr.filter((ele) => {
        return ele != "";
    });

    // console.log(arrnew);
    let ans = "";
    arrnew.forEach((ele, idx) => {
        ans += (`${idx + 1}. ${ele} `);
        ans += "\r\n";
    });

    return ans;
}

function removeLargeSpaces(data) {
    let arr = data.split("\r\n");
    let ansarr = [];

    for (let s of arr) {
        let str = "";
        for (let i in s) {
            if (s[i] == ' ') {
                if (i > 0 && s[i - 1] != ' ') str += s[i];
            }
            else str += s[i];
        }
        ansarr.push(str);
    }

    let ans = ansarr.join("\r\n");

    return ans;
}

