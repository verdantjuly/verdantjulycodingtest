const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (i=0;i<input.length;i++){
        let char =  String.fromCharCode(97 + i)
        console.log(char + " = " + input[i])
   
    }
});