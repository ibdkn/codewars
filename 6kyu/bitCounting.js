// DESCRIPTION
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
// representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// SOLUTION
let countBits = function(n) {
    // return n.toString(2).split('').filter(num => num === "1").length;
    return n.toString(2).split('0').join('').length;
};

console.log(countBits(0)) // 0
console.log(countBits(4)) // 1
console.log(countBits(7)) // 3
console.log(countBits(9)) // 2
console.log(countBits(10)) // 2