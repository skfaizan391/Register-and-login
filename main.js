const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    let valid = true;

    if(!email.value.match(emailPattern)){
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if(!password.value.match(passwordPattern)){
        password.classList.add("is-invalid");
        valid = false;
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    }

    if(valid){
        const user = {
            email: email.value,
            password: password.value
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration Successful!");
        window.location.href = "login.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && email === storedUser.email && password === storedUser.password){
        alert("Login Successful!");
    } else {
        alert("Invalid Email or Password");
    }
});