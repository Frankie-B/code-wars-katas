// Check Palindrome - https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

// Given the string, check if it is a palindrome.

function palindromeChecker(str) {
  str = str.toLowerCase();
  let onlyLetters = '';
  let wordReversed = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      onlyLetters += str[i];
    }
  }

  for (let i = onlyLetters.length - 1; i >= 0; i--) {
    wordReversed += onlyLetters[i];
  }
  console.log(wordReversed);

  if (wordReversed === onlyLetters) {
    console.log(onlyLetters);
    // console.log(`The string ${str} is a palindrome`);
  } else {
    console.log(wordReversed);
    // console.log(`The string ${str} is not a palindrome`);
  }
}
palindromeChecker('Amor, Roma');
