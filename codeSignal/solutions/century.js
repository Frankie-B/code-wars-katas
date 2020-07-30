// Century from yeat - https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN/solutions

/*
  Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
 */

function centuryFromYear(year) {
    const cent = Math.floor(year / 100);
    return year % 100 === 0 ? cent : cent + 1;
}

centuryFromYear();
