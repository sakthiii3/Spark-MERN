
// TASK 1: Async/Await - Student Details

async function getStudent() {
    const result = document.getElementById("studentResult");

    result.textContent = "Loading...";
    result.className = "";

    function getStudentDetails() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 101,
                    name: "Sakthi Sundaresan",
                    department: "IT"
                });
            }, 2000);
        });
    }

    const student = await getStudentDetails();

    result.textContent =
        `ID: ${student.id} | Name: ${student.name} | Department: ${student.department}`;

    result.className = "success";
}


// TASK 2: Promise - Product Availability

function checkProduct(isAvailable) {
    const result = document.getElementById("productResult");

    const product = new Promise((resolve, reject) => {
        if (isAvailable) {
            resolve("Product is available!");
        } else {
            reject("Product is not available!");
        }
    });

    product
        .then(message => {
            result.textContent = message;
            result.className = "success";
        })
        .catch(error => {
            result.textContent = error;
            result.className = "error";
        });
}


// TASK 3: Promise - Login Validation

function login() {
    const result = document.getElementById("loginResult");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginPromise = new Promise((resolve, reject) => {
        if (email === "sakthi@gmail.com" && password === "12345") {
            resolve("Login Successful!");
        } else {
            reject("Invalid Email or Password!");
        }
    });

    loginPromise
        .then(message => {
            result.textContent = message;
            result.className = "success";
        })
        .catch(error => {
            result.textContent = error;
            result.className = "error";
        });
}


// TASK 4: Try, Catch and Finally - Bank Withdrawal

function withdraw() {
    const result = document.getElementById("withdrawResult");

    const balance = Number(document.getElementById("balance").value);
    const amount = Number(document.getElementById("amount").value);

    try {
        if (balance <= 0 || amount <= 0) {
            throw new Error("Enter valid amounts!");
        }

        if (amount > balance) {
            throw new Error("Insufficient Balance!");
        }

        const remaining = balance - amount;

        result.textContent = `Withdrawal Successful! Remaining Balance: ₹${remaining}`;
        result.className = "success";

    } catch (error) {
        result.textContent = error.message;
        result.className = "error";

    } finally {
        console.log("Withdrawal operation completed.");
    }
}


// TASK 5: Employee Validation

function validateEmployee() {
    const result = document.getElementById("employeeResult");

    const name = document.getElementById("empName").value.trim();
    const email = document.getElementById("empEmail").value.trim();
    const salary = Number(document.getElementById("salary").value);

    try {
        if (name === "") {
            throw new Error("Employee name is required!");
        }

        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Enter a valid email!");
        }

        if (salary <= 0) {
            throw new Error("Salary must be greater than zero!");
        }

        result.textContent = "Employee Details Validated Successfully!";
        result.className = "success";

    } catch (error) {
        result.textContent = error.message;
        result.className = "error";

    } finally {
        console.log("Employee validation completed.");
    }
}


// TASK 6: Exception Handling - Division

function divide() {
    const result = document.getElementById("divideResult");

    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    try {
        if (
            document.getElementById("num1").value.trim() === "" ||
            document.getElementById("num2").value.trim() === ""
        ) {
            throw new Error("Please enter both numbers!");
        }

        if (num2 === 0) {
            throw new Error("Cannot divide by zero!");
        }

        const answer = num1 / num2;

        result.textContent = `Result: ${answer}`;
        result.className = "success";

    } catch (error) {
        result.textContent = error.message;
        result.className = "error";

    } finally {
        console.log("Division operation completed.");
    }
}
