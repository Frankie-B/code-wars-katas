/**
 * Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
 */

function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
            days = 30;
            break;
        case 6:
            days = 30;
            break;
        case 9:
            days = 30;
            break;
        case 11:
            days = 30;
            break;
        default:
            days = 31;
            break;
    }
    return days;
}
