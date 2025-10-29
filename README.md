# Assignment #6: JavaScript Basics (DOM Manipulation & Events)

**Student:** Bek Madias  
**Group:** SE-2430  
**Date:** October 20, 2025

---

## Table of Contents

1. [Part 1: Introduction to JavaScript](#part-1-introduction-to-javascript)
   - [Task 0: First Script](#task-0-first-script)
   - [Task 1: Variables & Operators](#task-1-variables--operators)
2. [Part 2: DOM Manipulation](#part-2-dom-manipulation)
   - [Task 2: Changing Content](#task-2-changing-content)
   - [Task 3: Changing Styles](#task-3-changing-styles)
   - [Task 4: Creating & Removing Elements](#task-4-creating--removing-elements)
3. [Part 3: Events](#part-3-events)
   - [Task 5: Mouse Events](#task-5-mouse-events)
   - [Task 6: Keyboard Events](#task-6-keyboard-events)
   - [Task 7: Calculator](#task-7-calculator)
4. [Part 4: Mini Project — Interactive To-Do List](#part-4-mini-project--interactive-to-do-list)
   - [Task 8: Build a To-Do App](#task-8-build-a-to-do-app)
5. [Summary of Work Process](#summary-of-work-process)

---

## Part 1: Introduction to JavaScript

### Task 0: First Script

**Objective:** Create an HTML page with JavaScript, use `console.log()` to print name and group, and show an alert message.

**Implementation:**

```javascript
function task0() {
  console.log("Name: Bek Madias");
  console.log("Group: SE-2430");
  alert("Hello, JavaScript World!");
}
```

**Key Concepts:**

- Using `console.log()` for debugging and output
- Creating alert dialogs with `alert()`
- Linking JavaScript files to HTML
- Creating interactive buttons with `onclick` events

---

### Task 1: Variables & Operators

**Objective:** Declare variables of different data types, perform arithmetic operations, and concatenate strings.

**Implementation:**

```javascript
function task1() {
  // Variables of different types
  let studentName = "Bek Madias"; // string
  let age = 20; // number
  let isStudent = true; // boolean
  let gpa = 3.85; // number (float)

  // Arithmetic operations
  let num1 = 15;
  let num2 = 7;
  let sum = num1 + num2; // 22
  let difference = num1 - num2; // 8
  let product = num1 * num2; // 105
  let quotient = num1 / num2; // 2.14
  let remainder = num1 % num2; // 1

  // String concatenation
  let greeting = "Hello, " + studentName + "!";
  let info = studentName + " is " + age + " years old";
}
```

**Key Concepts:**

- Variable declaration with `let`
- Data types: string, number, boolean
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- String concatenation with `+` operator
- Template literals for string formatting
- `typeof` operator to check data types

---

## Part 2: DOM Manipulation

### Task 2: Changing Content

**Objective:** Create a paragraph and button that changes the paragraph text when clicked.

**Implementation:**

```javascript
function task2() {
  const paragraph = document.getElementById("task2-paragraph");
  const newTexts = [
    "The text has been successfully changed!",
    "DOM manipulation is powerful!",
    "This demonstrates changing content dynamically!",
    "JavaScript makes web pages interactive!",
  ];

  let currentIndex = newTexts.indexOf(paragraph.textContent);
  let nextIndex = (currentIndex + 1) % newTexts.length;
  paragraph.textContent = newTexts[nextIndex];
}
```

**HTML Structure:**

```html
<p id="task2-paragraph">This is the original paragraph text.</p>
<button onclick="task2()">Change Text</button>
```

**Key Concepts:**

- Selecting elements with `document.getElementById()`
- Changing text content with `.textContent` property
- Array rotation for cycling through multiple texts
- DOM element property manipulation

---

### Task 3: Changing Styles

**Objective:** Create a div container with buttons that change its background color and font size.

**Implementation:**

```javascript
const colors = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
];

const fontSizes = ["1.25rem", "1.5rem", "1.75rem", "2rem", "1rem"];

function task3ChangeColor() {
  const box = document.getElementById("task3-box");
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  box.style.background = colors[currentColorIndex];
}

function task3ChangeFontSize() {
  const box = document.getElementById("task3-box");
  currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
  box.style.fontSize = fontSizes[currentFontSizeIndex];
}
```

**Key Concepts:**

- Manipulating CSS properties via `.style` object
- Using gradient backgrounds
- Cycling through style arrays
- Multiple button interactions on single element

---

### Task 4: Creating & Removing Elements

**Objective:** Create buttons to dynamically add and remove list items.

**Implementation:**

```javascript
let itemCounter = 4;

function task4AddItem() {
  const list = document.getElementById("task4-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCounter}`;
  list.appendChild(newItem);
  itemCounter++;
}

function task4RemoveItem() {
  const list = document.getElementById("task4-list");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  } else {
    alert("No items to remove!");
  }
}
```

**Key Concepts:**

- Creating elements with `document.createElement()`
- Adding elements with `.appendChild()`
- Removing elements with `.removeChild()`
- Accessing child elements with `.lastElementChild`
- Counter variable for unique item naming
- Validation to prevent errors

---

## Part 3: Events

### Task 5: Mouse Events

**Objective:** Create a box that changes color on mouseover and restores on mouseout.

**Implementation:**

```javascript
function task5MouseOver() {
  const box = document.getElementById("task5-box");
  box.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
  box.style.transform = "scale(1.05) rotate(2deg)";
  box.textContent = "🎨 Mouse is over!";
}

function task5MouseOut() {
  const box = document.getElementById("task5-box");
  box.style.background = "var(--bg-primary)";
  box.style.transform = "scale(1) rotate(0deg)";
  box.textContent = "Hover over me!";
}
```

**HTML:**

```html
<div id="task5-box" onmouseover="task5MouseOver()" onmouseout="task5MouseOut()">
  Hover over me!
</div>
```

**Key Concepts:**

- Mouse event handlers: `onmouseover` and `onmouseout`
- Multiple style changes in single function
- CSS transforms (scale and rotate)
- Interactive visual feedback

---

### Task 6: Keyboard Events

**Objective:** Create an input field that displays its value in real-time using keyup event.

**Implementation:**

```javascript
function task6KeyUp() {
  const input = document.getElementById("task6-input");
  const output = document.getElementById("task6-output");
  const value = input.value;

  if (value.trim() === "") {
    output.textContent = "Your text will appear here...";
    output.style.color = "var(--text-secondary)";
  } else {
    output.textContent = `You typed: "${value}"\nLength: ${value.length} characters`;
    output.style.color = "var(--text-primary)";
  }
}
```

**Key Concepts:**

- Keyboard event: `onkeyup`
- Reading input values with `.value` property
- Real-time data display
- String methods: `.trim()`, `.length`
- Conditional styling based on input state

---

### Task 7: Calculator

**Objective:** Create a basic calculator for addition, subtraction, multiplication, and division.

**Implementation:**

```javascript
function calculate(operation) {
  const num1 = parseFloat(document.getElementById("calc-num1").value);
  const num2 = parseFloat(document.getElementById("calc-num2").value);
  const resultElement = document.getElementById("calc-result");

  // Validation
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Result: Please enter valid numbers";
    resultElement.style.color = "#ff4444";
    return;
  }

  let result;
  let operationSymbol;

  switch (operation) {
    case "+":
      result = num1 + num2;
      operationSymbol = "+";
      break;
    case "-":
      result = num1 - num2;
      operationSymbol = "−";
      break;
    case "*":
      result = num1 * num2;
      operationSymbol = "×";
      break;
    case "/":
      if (num2 === 0) {
        resultElement.textContent = "Result: Cannot divide by zero";
        resultElement.style.color = "#ff4444";
        return;
      }
      result = num1 / num2;
      operationSymbol = "÷";
      break;
  }

  resultElement.textContent = `Result: ${num1} ${operationSymbol} ${num2} = ${result.toFixed(
    2
  )}`;
}
```

**Key Concepts:**

- Parsing string to number with `parseFloat()`
- Input validation with `isNaN()`
- Switch statement for multiple operations
- Error handling (division by zero)
- Number formatting with `.toFixed()`
- Template literals for formatted output

---

## Part 4: Mini Project — Interactive To-Do List

### Task 8: Build a To-Do App

**Objective:** Create a fully functional to-do list application with add, delete, and complete functionality.

**Implementation:**

**Data Structure:**

```javascript
let tasks = [];

const task = {
  id: Date.now(),
  text: taskText,
  completed: false,
};
```

**Add Task Function:**

```javascript
function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  input.value = "";
  renderTasks();
}
```

**Delete Task Function:**

```javascript
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}
```

**Toggle Complete Function:**

```javascript
function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}
```

**Render Tasks Function:**

```javascript
function renderTasks() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (task.completed ? " completed" : "");

    li.innerHTML = `
            <div class="todo-left">
                <input type="checkbox" 
                       ${task.completed ? "checked" : ""} 
                       onchange="toggleTask(${task.id})">
                <span class="todo-text">${task.text}</span>
            </div>
            <div class="todo-actions">
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

    todoList.appendChild(li);
  });

  // Update statistics
  const completedCount = tasks.filter((task) => task.completed).length;
  statsElement.innerHTML = `
        <span>Total: ${tasks.length}</span>
        <span>Completed: ${completedCount}</span>
    `;
}
```

**Key Concepts:**

- Array management for data storage
- Object structure for task data
- Dynamic HTML generation with `.innerHTML`
- Array methods: `.push()`, `.filter()`, `.find()`, `.forEach()`
- Unique ID generation with `Date.now()`
- Checkbox event handling
- Conditional rendering based on task state
- CSS classes for styling states
- Real-time statistics calculation
- Enter key support for better UX

---

## Summary of Work Process

### Overview

This assignment successfully demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and building interactive web applications. All 8 tasks were completed with modern, clean code and a professional user interface.

### Technical Achievements

#### 1. **HTML Structure**

- Semantic HTML5 elements
- Proper document structure with navigation
- Accessibility considerations
- Clean and maintainable markup

#### 2. **CSS Styling**

- Modern minimalist design aesthetic
- CSS custom properties (variables) for theme consistency
- Responsive design with mobile breakpoints
- Smooth animations and transitions
- Grid and Flexbox layouts
- Gradient backgrounds and visual hierarchy

#### 3. **JavaScript Implementation**

- Clean, well-commented code
- Function-based organization
- Event-driven programming
- DOM manipulation techniques
- Array and object manipulation
- Input validation and error handling
- Real-time updates and interactions

### Design Features

#### Visual Design

- **Color Scheme:** Minimalist with light gray background and black text
- **Typography:** Large, bold headlines with small uppercase labels
- **Layout:** Wide sections with generous whitespace
- **Components:** Rounded pill buttons, smooth shadows, clean cards
- **Animations:** Subtle transitions for professional feel

#### User Experience

- Smooth scrolling navigation
- Active state highlighting
- Visual feedback on interactions
- Error messages for invalid inputs
- Real-time data display
- Keyboard shortcuts (Enter key support)

### Skills Demonstrated

1. **DOM Manipulation**

   - Selecting elements (`getElementById`)
   - Creating elements (`createElement`)
   - Modifying content (`.textContent`, `.innerHTML`)
   - Adding/removing elements (`appendChild`, `removeChild`)
   - Changing styles (`.style` object)

2. **Event Handling**

   - Mouse events (`mouseover`, `mouseout`)
   - Keyboard events (`keyup`, `keypress`)
   - Click events (`onclick`)
   - Change events (`onchange`)

3. **Data Management**

   - Arrays for storing data
   - Objects for structured data
   - Array methods (`.push()`, `.filter()`, `.find()`, `.forEach()`)
   - Data filtering and manipulation

4. **Logic & Control**

   - Conditional statements (`if/else`)
   - Switch statements
   - Loops (`.forEach()`)
   - Input validation
   - Error handling

5. **Modern JavaScript**
   - Template literals
   - Arrow functions
   - `const` and `let` declarations
   - Array destructuring
   - Modern array methods

### Challenges & Solutions

#### Challenge 1: Smooth Navigation

**Problem:** Creating smooth navigation between sections  
**Solution:** Implemented Intersection Observer API for automatic nav highlighting and smooth scroll behavior

#### Challenge 2: Task Management

**Problem:** Managing task state and rendering efficiently  
**Solution:** Created a centralized `renderTasks()` function that rebuilds the list on every change, ensuring consistency

#### Challenge 3: Visual Polish

**Problem:** Creating a modern, professional look  
**Solution:** Applied minimalist design principles with careful attention to spacing, typography, and subtle animations

#### Challenge 4: User Feedback

**Problem:** Providing clear feedback for user actions  
**Solution:** Added visual transitions, color changes, and informative messages for all interactions

### Testing Results

All tasks were tested and verified to work correctly:

✅ **Task 0:** Console logs and alerts function properly  
✅ **Task 1:** Variables and operators display correctly  
✅ **Task 2:** Paragraph text changes on button click  
✅ **Task 3:** Styles change dynamically  
✅ **Task 4:** List items can be added and removed  
✅ **Task 5:** Mouse events trigger visual changes  
✅ **Task 6:** Keyboard input displays in real-time  
✅ **Task 7:** Calculator performs all operations with validation  
✅ **Task 8:** To-do app fully functional with all features

### Code Quality

- **Organization:** Code is well-structured and commented
- **Naming:** Clear, descriptive variable and function names
- **Consistency:** Consistent coding style throughout
- **Best Practices:** Modern JavaScript practices applied
- **Maintainability:** Easy to understand and modify
- **Error Handling:** Proper validation and error messages

### Learning Outcomes

Through this assignment, I have successfully:

1. ✅ Understood how to manipulate the DOM with JavaScript
2. ✅ Learned to handle various types of events
3. ✅ Created interactive web applications
4. ✅ Managed application state with arrays and objects
5. ✅ Implemented proper error handling and validation
6. ✅ Applied modern CSS design principles
7. ✅ Built a complete mini-project from scratch
8. ✅ Gained confidence in JavaScript programming

### Conclusion

This assignment has been an excellent introduction to JavaScript fundamentals. All objectives were met, and the final product demonstrates a strong understanding of DOM manipulation, event handling, and building interactive web applications. The clean, modern design and robust functionality showcase both technical skills and attention to user experience.

The project runs without errors, all features work as expected, and the code is well-organized and maintainable. This foundation will be valuable for more advanced JavaScript development in future projects.

---

**Project Completion Date:** October 20, 2025  
**Student:** Bek Madias  
**Group:** SE-2430  
**Status:** ✅ All tasks completed successfully

---

## File Structure

```
ass6/
├── index.html          # Main HTML file with all task implementations
├── styles.css          # Complete CSS styling with modern design
├── script.js           # JavaScript code for all 8 tasks
├── README.md           # This report
```

## Browser Compatibility

Tested and working on:

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)

---

_End of Report_
