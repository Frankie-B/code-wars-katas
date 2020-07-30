// Training JS #8: - https://www.codewars.com/kata/572059afc2f4612825000d8a/javascript

// Conditional statement--switch

// In javascript, switch is another condition statement.

// switch(n){
//   case 1:
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;

//   default:       //default is optional, sometimes it can be omitted
//     //code block
//                  //The last one does not need break
// }
// switch is the keyword, n is the variable to switch, case 1 means when n===1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.

// In some cases, use the switch statement to look more clearly than the if..else statement.

// For example, we can write a function to calculate what day is today, like this:

// function whatDayIsToday(n){
//   //getDay() is a methods of Date(), we will learn them later.
//   var day=new Date().getDay(),x;
//   switch (day){
//     case 0:
//       x="Today it's Sunday";
//       break;
//     case 1:
//       x="Today it's Monday";
//       break;
//     case 2:
//       x="Today it's Tuesday";
//       break;
//     case 3:
//       x="Today it's Wednesday";
//       break;
//     case 4:
//       x="Today it's Thursday";
//       break;
//     case 5:
//       x="Today it's Friday";
//       break;
//     case 6:
//       x="Today it's Saturday";
//       break;
//   }
//   return x;
// }
// #Task
// Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

function howManydays(month) {
    switch (month) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return 31;
}

// clever solution:
// function howManydays(month) {
//   return new Date(2015, month, 0).getDate();
//   ('switch');
// }

// clever solution 2:
// [,,,,-,,-,,,-,,-][-]?31:28?2--:30

/**
 * 
 * Explanation for the insane above solution
 * 
 * howManydays=a=>{ // 'Your solution should contains keyword "switch"'

  // [,,,,1,,1,,,1,,1][a]
  // [ <4 empty items>, 1, <1 empty item>, 1, <2 empty items>, 1, <1 empty item>, 1 ]
  // [,1][0] --> [ <1 empty items> ,1 ][0] --> undefined --> falsye

  // indexses of truthy values are 4,6,9,11 
  if (a==4 || a==6 || a==9 || a==11) {
    return 30;
  } else if (a!=2){ // (a-2) // just because is shorter
    return 31;
  } else {
    return 28;
  }
} 
 * 
 */

// clever solution 3:

// function howManydays(m) {
//    switch
//   return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
// }

// insane solution 4

/**
 * 
 * 
 * howManydays=ـ=>//switch
ـ-2?30+((7<ـ)+ـ)%2:28
 */
