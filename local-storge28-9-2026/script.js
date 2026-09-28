let users = JSON.parse(localStorage.getItem("users")) || [];

const adminExists = users.some(user => user.role === "admin");
if (!adminExists) {
  users.push({
    email: "admin@gmail.com",
    password: "123",
    name: "System Admin",
    role: "admin"
  });
  localStorage.setItem("users", JSON.stringify(users));
}

const signupBtn = document.querySelector('.sign-btn');
const usernameInput = document.getElementById('user-name'); 
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('conform-pass');

const loginBtn = document.getElementById('submit-btn'); 
const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');

if (signupBtn) {
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert("This email already exists!");
      return;
    }

    const newUser = {
      name: username,
      email: email,
      password: password,
      role: "user"
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Your account has been created successfully!');
    window.location.href = "login.html"; 
  });
}


if (loginBtn) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    const email = loginEmailInput.value.trim();
    const password = loginPasswordInput.value;

    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      alert("Logged in successfully!");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      // التوجيه حسب الصلاحية
      if (foundUser.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "dashboard.html";
      }
    } else {
      alert("Your email or password is not correct!");
    }
  });
}

// 6. عرض معلومات المستخدم (يُنفذ فقط داخل صفحة الـ Dashboard عند وجود عنصر userInfo)
const userInfoElement = document.getElementById("userInfo");
if (userInfoElement) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    window.location.href = "login.html";
  } else {
    userInfoElement.textContent = `Hello ${currentUser.name} (${currentUser.email})`;
  }
}