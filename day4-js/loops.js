// ==========================================
// DAY 4 - PART B: LOOPS
// ==========================================


// 1. MULTIPLICATION TABLE
console.log("===== MULTIPLICATION TABLE =====");

const tableOf = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${tableOf} x ${i} = ${tableOf * i}`);
}


// 2. SUM OF DIGITS
console.log("\n===== SUM OF DIGITS =====");

let num = 1234;
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("1234 → Sum of digits:", sum);


// 3. REVERSE A NUMBER (no string conversion)
console.log("\n===== REVERSE A NUMBER =====");

let original = 1234;
let reversed = 0;
let temp = original;

while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}

console.log(`${original} → Reversed: ${reversed}`);


// 4. PALINDROME STRING (no .reverse())
console.log("\n===== PALINDROME STRING =====");

const isPalindrome = (word) => {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    const result = word === reversed;
    console.log(`"${word}" → ${result}`);
};

isPalindrome("madam");
isPalindrome("hello");


// 5. FIZZBUZZ (1 to 30)
console.log("\n===== FIZZBUZZ =====");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "→ FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i, "→ Fizz");
    } else if (i % 5 === 0) {
        console.log(i, "→ Buzz");
    } else {
        console.log(i);
    }
}


// 6. PRIME CHECK (uses break)
console.log("\n===== PRIME CHECK =====");

const isPrime = (n) => {
    if (n < 2) {
        console.log(n, "→ Not Prime");
        return;
    }

    let prime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }

    console.log(n, "→", prime ? "Prime" : "Not Prime");
};

isPrime(2);
isPrime(7);
isPrime(10);
isPrime(17);
isPrime(1);


// 7. COUNT VOWELS (for...of)
console.log("\n===== COUNT VOWELS =====");

const sentence = "javascript is awesome";
const vowels = "aeiou";
let count = 0;

for (const char of sentence) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(`"${sentence}" → Vowel count: ${count}`);


// 8. STAR PATTERN (nested loops)
console.log("\n===== STAR PATTERN =====");

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}
