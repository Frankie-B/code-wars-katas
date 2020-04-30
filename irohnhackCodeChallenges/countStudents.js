function countStudents(height) {
  let count = 0;

  let sortedArr = [...height].sort((a, b) => {
    return a - b;
  });

  sortedArr.forEach((el, i) => {
    if (el !== height[i]) {
      count++;
    }
  });
  console.log(count);
}

countStudents([1, 1, 3, 4, 1]); // expected output : 3
