// DESCRIPTION
// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

// SOLUTION

function incrementString(strng) {
    let numbers = strng.match(/\d+/g);
    if(numbers) {
        let lastNumber = numbers.shift();
        let pos = strng.lastIndexOf(lastNumber);
        if (pos !== -1) {
            strng = strng.substring(0, pos) + strng.substring(pos + lastNumber.length);
        }
        return strng + (+lastNumber + 1).toString().padStart(lastNumber.length, '0');
    }
    return strng + 1;
}


console.log(incrementString("foobar000")); // "foobar001"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foobar00999")); // "foobar01000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar001")); // "foobar002"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("009")); // "010"
console.log(incrementString("fo99obar99")); // "fo99obar100"