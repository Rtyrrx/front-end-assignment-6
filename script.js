// ===================================
// PART 1: INTRODUCTION TO JAVASCRIPT
// ===================================

// Task 0: First Script
function task0() {
    // Console log - name and group
    console.log("Name: Bek Madias");
    console.log("Group: SE-2430");

    // Alert message
    alert("Hello, JavaScript World!");

    // Display in output box
    const output = document.getElementById('task0-output');
    output.textContent = "✓ Check console for name and group\n✓ Alert message displayed successfully!";
}

// Task 1: Variables & Operators
function task1() {
    // Declare variables of different data types
    let studentName = "Bek Madias";           // string
    let age = 18;                              // number
    let isStudent = true;                      // boolean
    let course = "Web Development";            // string
    let gpa = 3.85;                            // number (float)

    // Arithmetic operations
    let num1 = 15;
    let num2 = 7;
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    let remainder = num1 % num2;

    // String concatenation
    let greeting = "Hello, " + studentName + "!";
    let info = studentName + " is " + age + " years old and studies " + course;

    // Console output
    console.log("=== Variables ===");
    console.log("Name:", studentName, "(type:", typeof studentName + ")");
    console.log("Age:", age, "(type:", typeof age + ")");
    console.log("Is Student:", isStudent, "(type:", typeof isStudent + ")");
    console.log("GPA:", gpa, "(type:", typeof gpa + ")");

    console.log("\n=== Arithmetic Operations ===");
    console.log(num1 + " + " + num2 + " =", sum);
    console.log(num1 + " - " + num2 + " =", difference);
    console.log(num1 + " × " + num2 + " =", product);
    console.log(num1 + " ÷ " + num2 + " =", quotient.toFixed(2));
    console.log(num1 + " % " + num2 + " =", remainder);

    console.log("\n=== String Concatenation ===");
    console.log(greeting);
    console.log(info);

    // Display in output box
    const output = document.getElementById('task1-output');
    output.textContent = `Variables:
• Name: ${studentName} (${typeof studentName})
• Age: ${age} (${typeof age})
• Is Student: ${isStudent} (${typeof isStudent})
• GPA: ${gpa} (${typeof gpa})

Arithmetic Operations:
• ${num1} + ${num2} = ${sum}
• ${num1} - ${num2} = ${difference}
• ${num1} × ${num2} = ${product}
• ${num1} ÷ ${num2} = ${quotient.toFixed(2)}

String Concatenation:
• ${greeting}
• ${info}

✓ Check console for detailed output`;
}

// ===================================
// PART 2: DOM MANIPULATION
// ===================================

// Task 2: Changing Content
function task2() {
    const paragraph = document.getElementById('task2-paragraph');
    const newTexts = [
        "✨ The text has been successfully changed!",
        "🚀 DOM manipulation is powerful!",
        "🎯 This demonstrates changing content dynamically!",
        "💡 JavaScript makes web pages interactive!",
        "This is the original paragraph text. Click the button to change it!"
    ];

    // Get current text and find next text
    let currentText = paragraph.textContent;
    let currentIndex = newTexts.indexOf(currentText);
    let nextIndex = (currentIndex + 1) % newTexts.length;

    paragraph.textContent = newTexts[nextIndex];

    // Add animation
    paragraph.style.transform = 'scale(1.05)';
    setTimeout(() => {
        paragraph.style.transform = 'scale(1)';
    }, 300);
}

// Task 3: Changing Styles
let currentColorIndex = 0;
let currentFontSizeIndex = 0;

const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

const fontSizes = ['1.25rem', '1.5rem', '1.75rem', '2rem', '1rem'];

function task3ChangeColor() {
    const box = document.getElementById('task3-box');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    box.style.background = colors[currentColorIndex];
}

function task3ChangeFontSize() {
    const box = document.getElementById('task3-box');
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    box.style.fontSize = fontSizes[currentFontSizeIndex];
}

// Task 4: Creating & Removing Elements
let itemCounter = 4;

function task4AddItem() {
    const list = document.getElementById('task4-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemCounter}`;
    list.appendChild(newItem);
    itemCounter++;
}

function task4RemoveItem() {
    const list = document.getElementById('task4-list');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    } else {
        alert('No items to remove!');
    }
}

// ===================================
// PART 3: EVENTS
// ===================================

// Task 5: Mouse Events
function task5MouseOver() {
    const box = document.getElementById('task5-box');
    box.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    box.style.transform = 'scale(1.05) rotate(2deg)';
    box.textContent = '🎨 Mouse is over!';
}

function task5MouseOut() {
    const box = document.getElementById('task5-box');
    box.style.background = 'var(--bg-primary)';
    box.style.transform = 'scale(1) rotate(0deg)';
    box.textContent = 'Hover over me!';
}

// Task 6: Keyboard Events
function task6KeyUp() {
    const input = document.getElementById('task6-input');
    const output = document.getElementById('task6-output');
    const value = input.value;

    if (value.trim() === '') {
        output.textContent = 'Your text will appear here...';
        output.style.color = 'var(--text-secondary)';
    } else {
        output.textContent = `You typed: "${value}"\nLength: ${value.length} characters`;
        output.style.color = 'var(--text-primary)';
    }
}

// Task 7: Calculator
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const resultElement = document.getElementById('calc-result');

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Result: Please enter valid numbers';
        resultElement.style.color = '#ff4444';
        return;
    }

    let result;
    let operationSymbol;

    switch (operation) {
        case '+':
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case '-':
            result = num1 - num2;
            operationSymbol = '−';
            break;
        case '*':
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Result: Cannot divide by zero';
                resultElement.style.color = '#ff4444';
                return;
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
        default:
            result = 0;
            operationSymbol = '?';
    }

    resultElement.textContent = `Result: ${num1} ${operationSymbol} ${num2} = ${result.toFixed(2)}`;
    resultElement.style.color = 'var(--text-primary)';

    // Animation
    resultElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        resultElement.style.transform = 'scale(1)';
    }, 200);
}

// ===================================
// PART 4: MINI PROJECT - TO-DO LIST
// ===================================

// Array to store tasks
let tasks = [];

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add to array
    tasks.push(task);

    // Clear input
    input.value = '';

    // Render tasks
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function renderTasks() {
    const todoList = document.getElementById('todo-list');
    const statsElement = document.getElementById('todo-stats');

    // Clear list
    todoList.innerHTML = '';

    // Render each task
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (task.completed ? ' completed' : '');

        li.innerHTML = `
            <div class="todo-left">
                <input type="checkbox" class="todo-checkbox" 
                       ${task.completed ? 'checked' : ''} 
                       onchange="toggleTask(${task.id})">
                <span class="todo-text">${task.text}</span>
            </div>
            <div class="todo-actions">
                <button class="todo-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        todoList.appendChild(li);
    });

    // Update stats
    const completedCount = tasks.filter(task => task.completed).length;
    statsElement.innerHTML = `
        <span>Total: ${tasks.length}</span>
        <span>Completed: ${completedCount}</span>
    `;
}

// ===================================
// NAVIGATION & SMOOTH SCROLLING
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for navigation highlighting
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Log initial message
    console.log('%c🚀 JavaScript Assignment #6', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cStudent: Bek Madias | Group: SE-2430', 'font-size: 14px; color: #666;');
    console.log('%cAll tasks are ready to run! Click the buttons to see them in action.', 'font-size: 12px; color: #999;');
});

// Add Enter key support for To-Do input
document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    if (todoInput) {
        todoInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
});

// Add Enter key support for calculator
document.addEventListener('DOMContentLoaded', function () {
    const calcInputs = document.querySelectorAll('.calc-input');
    calcInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                calculate('+');
            }
        });
    });
});
