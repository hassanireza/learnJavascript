// Day 29 Project: Tested Utility Functions

let passCount = 0;
let failCount = 0;

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    passCount++;
    console.log(`PASS: ${testName}`);
  } else {
    failCount++;
    console.error(`FAIL: ${testName} (expected ${expected}, got ${actual})`);
  }
}

// TODO: Write capitalize(text), isPalindrome(text), sumArray(numbers), isEven(n)

// TODO: Write at least three assertEqual() tests per function, including edge cases

console.log(`\nResults: ${passCount} passed, ${failCount} failed.`);
