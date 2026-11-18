// ==========================================
// DAY 4 - PART A: CONDITIONAL STATEMENTS
// ==========================================


// 1. EVEN OR ODD
console.log("===== EVEN OR ODD =====");

const number = 7;

if (number % 2 === 0) {
    console.log(number, "→ Even");
} else {
    console.log(number, "→ Odd");
}


// 2. LARGEST OF THREE (no Math.max)
console.log("\n===== LARGEST OF THREE =====");

const a = 45, b = 78, c = 23;
let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log(`a=${a}, b=${b}, c=${c} → Largest: ${largest}`);


// 3. LEAP YEAR
console.log("\n===== LEAP YEAR =====");

const checkLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year, "→ Leap Year");
    } else {
        console.log(year, "→ Not a Leap Year");
    }
};

checkLeapYear(2024);
checkLeapYear(1900);
checkLeapYear(2000);


// 4. ELECTRICITY BILL
console.log("\n===== ELECTRICITY BILL =====");

const calcBill = (units) => {
    let bill = 0;

    if (units <= 100) {
        bill = 0;
    } else if (units <= 200) {
        bill = (units - 100) * 2;
    } else if (units <= 500) {
        bill = (100 * 2) + (units - 200) * 5;
    } else {
        bill = (100 * 2) + (300 * 5) + (units - 500) * 8;
    }

    console.log(`${units} units → ₹${bill}`);
};

calcBill(50);
calcBill(150);
calcBill(250);
calcBill(600);


// 5. DAY NAME (switch)
console.log("\n===== DAY NAME =====");

const getDayName = (day) => {
    switch (day) {
        case 1: console.log(day, "→ Monday"); break;
        case 2: console.log(day, "→ Tuesday"); break;
        case 3: console.log(day, "→ Wednesday"); break;
        case 4: console.log(day, "→ Thursday"); break;
        case 5: console.log(day, "→ Friday"); break;
        case 6: console.log(day, "→ Saturday"); break;
        case 7: console.log(day, "→ Sunday"); break;
        default: console.log(day, "→ Invalid day");
    }
};

getDayName(1);
getDayName(5);
getDayName(7);
getDayName(9);


// 6. LOGIN CHECK (uses &&, ||, !)
console.log("\n===== LOGIN CHECK =====");

const login = (username, password, isBlocked) => {
    const validUsername = "sakthi";
    const validPassword = "pass123";

    if (isBlocked) {
        console.log("Account blocked");
    } else if (!(username === validUsername && password === validPassword)) {
        console.log("Invalid credentials");
    } else {
        console.log(`Welcome ${username}`);
    }
};

login("sakthi", "pass123", true);
login("sakthi", "wrongpass", false);
login("sakthi", "pass123", false);
login("admin", "pass123", false);
