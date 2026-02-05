let form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let arr = JSON.parse(localStorage.getItem("array")) || [];
    let user = arr.some(v => v.email === email && v.password === password);
    if (user==true) {
        location.assign("https://vedu-09.github.io/E-Commerce/homePage.html");
    } else {
        alert("Invalid email or password");
    }
});