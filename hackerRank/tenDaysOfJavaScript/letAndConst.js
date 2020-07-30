// Day 1 - Let and Const : https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true

/**
In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

Task

Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
Read a number, , denoting the radius of a circle from stdin.
Use  and  to calculate the  and  of a circle having radius .
Print  as the first line of output and print  as the second line of output.
 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString
        .trim()
        .split('\n')
        .map(string => string.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const { PI } = Math;
    const r = readLine();

    console.log(PI * r * r);
    console.log(2 * PI * r);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main();
