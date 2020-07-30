// Conditional Statements: Switch - https://www.hackerrank.com/challenges/js10-switch/problem

/** 
Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

https://gyazo.com/244779be9f6bb1bd6d0f4d82e059ec44
*/

function getLetter(s) {
    let letter;
    switch (s[0]) {
        case 'a' || 'e' || 'o' || 'i' || 'u':
            letter = 'A';
            break;

        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B';
            break;

        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C';
            break;

        case 'z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y':
            letter = 'D';
    }

    return letter;
}

getLetter('adfgt');
