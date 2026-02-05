let form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("Username", name);
    let arr = JSON.parse(localStorage.getItem("array")) || [];

    arr.push({ email: email, password: password });
    localStorage.setItem("array", JSON.stringify(arr));

    location.assign("https://vedu-09.github.io/E-Commerce/login.html");
});