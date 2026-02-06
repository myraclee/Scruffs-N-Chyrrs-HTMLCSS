document.getElementById("adminLoginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = adminEmail.value.trim();
    let password = adminPassword.value.trim();
    let valid = true;

    adminEmailError.textContent = "";
    adminPasswordError.textContent = "";

    if (email === "") {
        adminEmailError.textContent = "Admin email is required";
        valid = false;
    }

    if (password === "") {
        adminPasswordError.textContent = "Password is required";
        valid = false;
    }

    if (valid) {
        window.location.href = "admin_dashboard.html";
    }
});
