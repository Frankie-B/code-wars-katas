// References and information to remember when solving Katas.

// Exclusive or or exclusive disjunction is a logical operation that outputs true only when inputs differ (one is true, the other is false)

// The forEach() method executes a provided function once for each array element.
// Syntax = arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

/**
 * a golfed solution to # 8 train javascript collection - [,,,,ـ,,ـ,,,ـ,,ـ][ـ]?30:ـ-2?31:28
 
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
 */
