let users = JSON.parse(localStorage.getItem("users")) || [];
const adminExists = users.some(u => u.role === "admin");
console.log("(users):", users);
console.log(" (currentUser):", currentUser);
if (!adminExists) {
  users.push({
    name: "System Admin",
    email: "admin@gmail.com",
    password: "123",
    role: "admin" 
  });
  localStorage.setItem("users", JSON.stringify(users)); 
}

const signupForm = document.querySelector('.form-sign-up');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('user-name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('conform-pass').value;

    if (!username || !email || !password || !confirmPassword) {
      alert("fill all frildل!");
      return;
    }

    if (password !== confirmPassword) {
      alert("password dont matches!");
      return;
    }

    const userExists = users.some(u => u.email === email);
    if (userExists) {
      alert("  already have account ");
      return;
    }

    const newUser = {
      name: username,
      email: email,
      password: password,
      role: "user" 
    };

    users.push(newUser);
    
    localStorage.setItem("users", JSON.stringify(users)); 
    console.log("done add newuser successfully", newUser);
    console.log(" after add :", users);
    alert("created acount succsesfuly");
    window.location.href = "login.html"; 
  });
}



const loginBtn = document.getElementById('submit-btn');
if (loginBtn) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert("enter your email and password");
      return;
    }

    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
        console.log("user founded and login :", foundUser);
        localStorage.setItem("currentUser", JSON.stringify(foundUser));     

      if (foundUser.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "dashboard.html"; 
      }
    } else {
      alert("incorrect email");
    }
  });
}


const userDashboard = document.getElementById("user-dashboard");
if (userDashboard) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "login.html";
  } else {
    document.getElementById("user-info").innerHTML = `
      <h3>Welcome, ${currentUser.name}!</h3>
      <p>Email: ${currentUser.email}</p>
      <p>Role: ${currentUser.role}</p>
    `;
  }
}


const adminDashboard = document.getElementById("admin-dashboard");
if (adminDashboard) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  
  if (!currentUser || currentUser.role !== "admin") {
    alert("dont allow accsess to the admin page");
    window.location.href = "login.html";
  } else {
    const usersListElement = document.getElementById("all-users-list");
    usersListElement.innerHTML = users.map(u => `
      <li>
        <strong>${u.name}</strong> (${u.email}) - Role: <span>${u.role}</span>
      </li>
    `).join("");
  }
}
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}