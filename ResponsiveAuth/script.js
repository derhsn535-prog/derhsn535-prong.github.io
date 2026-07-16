const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.onclick = function () {

    loginForm.style.display = "block";

    registerForm.style.display = "none";

    loginBtn.classList.add("active");

    registerBtn.classList.remove("active");

}

registerBtn.onclick = function () {

    loginForm.style.display = "none";

    registerForm.style.display = "block";

    registerBtn.classList.add("active");

    loginBtn.classList.remove("active");

}

function togglePassword(id, icon) {

    let input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

        icon.innerHTML = "&#128584;";

    }

    else {

        input.type = "password";

        icon.innerHTML = "&#x1F441;";

    }

}