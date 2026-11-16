// ==========================================
// DAY 3 - JAVASCRIPT BASICS: TASK MANAGER
// ==========================================


// 1. VARIABLES & DATA TYPES

console.log("===== VARIABLES & DATA TYPES =====");

const name = "Sakthi";
const age = 20;
const isStudent = true;
const address = null;
let phone;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Student:", isStudent, "| Type:", typeof isStudent);
console.log("Address:", address, "| Type:", typeof address);
console.log("Phone:", phone, "| Type:", typeof phone);


// 2. OBJECTS

console.log("\n===== OBJECTS =====");

const user = {
    name: "Sakthi Sundaresan",
    email: "sakthisundaresans@gmail.com",
    role: "Developer"
};

// Object Destructuring
const { name: userName, email, role } = user;

console.log("User Name:", userName);
console.log("Email:", email);
console.log("Role:", role);

// Spread Operator
const updatedUser = {
    ...user,
    role: "Full Stack Developer"
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);


// 3. ARRAYS

console.log("\n===== INITIAL TASKS =====");

const tasks = [
    { id: 1, title: "Learn HTML", done: true },
    { id: 2, title: "Learn CSS", done: false },
    { id: 3, title: "Learn JavaScript", done: false }
];

console.log(tasks);


// 4. FUNCTIONS (ARROW FUNCTIONS ONLY)

// Add a new task
const addTask = (title) => {
    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: title,
        done: false
    };

    tasks.push(newTask);

    return newTask;
};


// Delete a task
const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);

    tasks.length = 0;
    tasks.push(...updatedTasks);

    return tasks;
};


// Mark a task as completed
const markDone = (id) => {
    const updatedTasks = tasks.map(task =>
        task.id === id
            ? { ...task, done: true }
            : task
    );

    tasks.length = 0;
    tasks.push(...updatedTasks);

    return tasks;
};


// Find a task by ID
const getTaskById = (id) => {
    return tasks.find(task => task.id === id);
};


// Get pending tasks
const getPendingTasks = () => {
    return tasks.filter(task => !task.done);
};


// Get all task titles
const getTaskTitles = () => {
    return tasks.map(task => task.title);
};


// BONUS: Get task summary
const getTaskSummary = () => {
    const total = tasks.length;

    const completed = tasks.filter(task => task.done).length;

    const pending = tasks.filter(task => !task.done).length;

    return {
        total,
        completed,
        pending
    };
};


// 5. TESTING ALL FUNCTIONS

console.log("\n===== ADD TASK =====");
console.log(addTask("Learn React"));

console.log("\n===== MARK TASK AS DONE =====");
console.log(markDone(2));

console.log("\n===== GET TASK BY ID =====");
console.log(getTaskById(3));

console.log("\n===== GET PENDING TASKS =====");
console.log(getPendingTasks());

console.log("\n===== GET TASK TITLES =====");
console.log(getTaskTitles());

console.log("\n===== DELETE TASK =====");
console.log(deleteTask(1));

console.log("\n===== FINAL TASK SUMMARY =====");
console.log(getTaskSummary());

console.log("\n===== FINAL TASK LIST =====");
console.log(tasks);
