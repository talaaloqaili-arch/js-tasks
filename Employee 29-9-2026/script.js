// Employee constructor function
function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // 100–1000
}

const STORAGE_KEY = 'employees';
const form = document.getElementById('employee-form');
const tableBody = document.getElementById('table-body');
const totalCell = document.getElementById('total');
const emptyMsg = document.getElementById('empty');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const deptInput = document.getElementById('department');

// Retrieve saved employees (JSON.parse) or start with an empty array
let employees = [];
try {
  employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
} catch {
  employees = [];
}

function saveEmployees() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

function render() {
  tableBody.innerHTML = '';
  let total = 0;

  employees.forEach(emp => {
    const row = document.createElement('tr');
    [emp.name, emp.email, emp.department, emp.salary].forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    tableBody.appendChild(row);
    total += emp.salary;
  });

  totalCell.textContent = total;
  emptyMsg.hidden = employees.length > 0;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const department = deptInput.value.trim();
  if (!name || !email || !department) return;

  employees.push(new Employee(name, email, department));
  saveEmployees();
  render();
  form.reset();
  nameInput.focus();
});

// Render stored employees on page load
render();