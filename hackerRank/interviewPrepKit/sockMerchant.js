// Sock Merchant - https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 9 socks with colors [10, 20, 20, 10, 10, 30, 50, 10, 20]. There is one pair of color and one of color. There are three odd socks left, one of each color. The number of pairs is

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

//     n: the number of socks in the pile
//     ar: the colors of each sock

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const sortedArr = [...ar].sort();
    console.log(sortedArr);
    let count = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) {
            count++; // increment after each iteration
            i += 1; // the number of matching pairs
        }
    }
    console.log(count); // final result
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// Alternate solution I

// function sockMerchant(n, ar) {
//   const sortedArr = [...ar].sort();
//   const results = [];
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       results.push(sortedArr[i]);
//       i = i + 1;
//     }
//   }
//   console.log(results.length);
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
