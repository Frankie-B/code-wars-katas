// Check Palindrome - https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    inputString = inputString.toLowerCase();
    let letters = '';
    let reverseStr = '';

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] >= 'a' && inputString[i] <= 'z') {
            letters += inputString[i];
        }
    }

    for (let i = letters.length - 1; i >= 0; i--) {
        reverseStr += letters[i];
    }

    return reverseStr === letters;
}

checkPalindrome('aaabaa');
