
console.log("========== ASYNC/AWAIT & EXCEPTION HANDLING ==========");


// ==========================================
// PART 1: ASYNC / AWAIT
// ==========================================


// TASK 1: STUDENT DETAILS

console.log("\n--- TASK 1: STUDENT DETAILS ---");

const getStudentDetails = async () => {

    const studentPromise = new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 101,
                name: "Sakthi Sundaresan",
                department: "Information Technology"
            });

        }, 2000);

    });

    const student = await studentPromise;

    return student;
};


const displayStudentDetails = async () => {

    const student = await getStudentDetails();

    console.log("Student ID:", student.id);
    console.log("Student Name:", student.name);
    console.log("Department:", student.department);

};

displayStudentDetails();


// TASK 2: PRODUCT AVAILABILITY

console.log("\n--- TASK 2: PRODUCT AVAILABILITY ---");

const checkProductAvailability = (isAvailable) => {

    return new Promise((resolve, reject) => {

        if (isAvailable) {
            resolve("Product Available");
        } else {
            reject("Product Out of Stock");
        }

    });

};


const displayProductStatus = async () => {

    try {

        const result = await checkProductAvailability(true);
        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

};

// Success scenario
displayProductStatus();


// Failure scenario
const displayUnavailableProduct = async () => {

    try {

        const result = await checkProductAvailability(false);
        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

};

displayUnavailableProduct();


// TASK 3: LOGIN VALIDATION

console.log("\n--- TASK 3: LOGIN VALIDATION ---");

const validEmail = "sakthi@gmail.com";
const validPassword = "12345";


const loginValidation = (email, password) => {

    return new Promise((resolve, reject) => {

        if (email === validEmail && password === validPassword) {

            resolve("Login Successful");

        } else {

            reject("Invalid Email or Password");

        }

    });

};


const checkLogin = async (email, password) => {

    try {

        const result = await loginValidation(email, password);
        console.log(result);

    } catch (error) {

        console.log("Login Error:", error);

    }

};


// Success scenario
checkLogin("sakthi@gmail.com", "12345");

// Failure scenario
checkLogin("wrong@gmail.com", "123");


// ==========================================
// PART 2: EXCEPTION HANDLING
// ==========================================


// TASK 4: ATM WITHDRAWAL

console.log("\n--- TASK 4: ATM WITHDRAWAL ---");

const withdrawMoney = (balance, amount) => {

    if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than zero");
    }

    if (amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return balance - amount;

};


// Success scenario
try {

    const remainingBalance = withdrawMoney(10000, 3000);

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", remainingBalance);

} catch (error) {

    console.log("ATM Error:", error.message);

} finally {

    console.log("Transaction Completed");

}


// Failure scenario
try {

    const remainingBalance = withdrawMoney(5000, 7000);

    console.log("Remaining Balance:", remainingBalance);

} catch (error) {

    console.log("ATM Error:", error.message);

} finally {

    console.log("Transaction Completed");

}


// TASK 5: EMPLOYEE DATA VALIDATION

console.log("\n--- TASK 5: EMPLOYEE DATA VALIDATION ---");

const employee = {
    name: "Sakthi",
    email: "sakthi@gmail.com",
    salary: 25000
};


const validateEmployee = (employee) => {

    if (!employee.name || employee.name.trim() === "") {
        throw new Error("Employee name is required");
    }

    if (!employee.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
        throw new Error("Invalid employee email");
    }

    if (typeof employee.salary !== "number" || !Number.isFinite(employee.salary) || employee.salary <= 0) {
        throw new Error("Invalid employee salary");
    }

    return "Employee Data is Valid";

};


// Success scenario
try {

    console.log(validateEmployee(employee));

} catch (error) {

    console.log("Validation Error:", error.message);

} finally {

    console.log("Employee Validation Completed");

}


// Failure scenario
const invalidEmployee = {
    name: " ",
    email: "invalid-email",
    salary: -5000
};

try {

    console.log(validateEmployee(invalidEmployee));

} catch (error) {

    console.log("Validation Error:", error.message);

} finally {

    console.log("Employee Validation Completed");

}


// TASK 6: NUMBER DIVISION

console.log("\n--- TASK 6: NUMBER DIVISION ---");

const divideNumbers = (num1, num2) => {

    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }

    return num1 / num2;

};


// Success scenario
try {

    const result = divideNumbers(20, 5);

    console.log("Division Result:", result);

} catch (error) {

    console.log("Division Error:", error.message);

} finally {

    console.log("Calculation Completed");

}


// Failure scenario
try {

    const result = divideNumbers(20, 0);

    console.log("Division Result:", result);

} catch (error) {

    console.log("Division Error:", error.message);

} finally {

    console.log("Calculation Completed");

}


