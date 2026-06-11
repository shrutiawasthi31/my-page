const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const roleSelect = document.getElementById("role");
const rememberMeCheckbox = document.getElementById("rememberMe");
const togglePasswordButton = document.getElementById("togglePassword");
const loginButton = loginForm?.querySelector(".login-btn");
const buttonLabel = loginButton?.querySelector(".btn-label");
const forgotPasswordLink = document.querySelector(".forgot-password");
const signUpLink = document.querySelector(".signup-link a");
const notificationRegion = document.getElementById("notificationRegion");
const socialButtons = document.querySelectorAll(".social-btn");

const STORAGE_KEYS = {
    email: "northstar-user-email",
    role: "northstar-user-role"
};

restoreSavedSession();
bindEvents();

function bindEvents() {
    if (togglePasswordButton && passwordInput) {
        togglePasswordButton.addEventListener("click", togglePasswordVisibility);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (emailInput) {
        emailInput.addEventListener("blur", () => validateField(emailInput));
        emailInput.addEventListener("input", () => clearFieldState(emailInput));
    }

    if (passwordInput) {
        passwordInput.addEventListener("blur", () => validateField(passwordInput));
        passwordInput.addEventListener("input", () => clearFieldState(passwordInput));
    }

    if (roleSelect) {
        roleSelect.addEventListener("change", () => validateField(roleSelect));
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener("click", (event) => {
            event.preventDefault();
            showNotification("Password reset instructions would be sent to your workspace email.", "info");
        });
    }

    if (signUpLink) {
        signUpLink.addEventListener("click", (event) => {
            event.preventDefault();
            showNotification("Invitation requests usually route through your workspace administrator.", "info");
        });
    }

    socialButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const provider = button.textContent.trim();
            showNotification(`OAuth flow for ${provider} would start here.`, "info");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.key.toLowerCase() === "l") {
            loginButton?.focus();
        }
    });
}

function togglePasswordVisibility() {
    const reveal = passwordInput.type === "password";
    passwordInput.type = reveal ? "text" : "password";
    togglePasswordButton.setAttribute("aria-pressed", String(reveal));
    togglePasswordButton.setAttribute("aria-label", reveal ? "Hide password" : "Show password");
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const fields = [emailInput, passwordInput, roleSelect];
    const allValid = fields.every((field) => validateField(field));

    if (!allValid) {
        showNotification("Please complete every field with valid details.", "error");
        return;
    }

    setLoadingState(true);

    window.setTimeout(() => {
        persistSessionPreference();
        setLoadingState(false);
        showNotification(`Welcome back${emailInput.value ? `, ${emailInput.value}` : ""}.`, "success");
        loginForm.reset();
        roleSelect.value = rememberMeCheckbox.checked ? roleSelect.value : "";
        restoreSavedSession();
    }, 1300);
}

function validateField(field) {
    if (!field) {
        return false;
    }

    const value = field.value.trim();
    let isValid = Boolean(value);

    if (field === emailInput && value) {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    clearFieldState(field);
    field.classList.add(isValid ? "success" : "error");
    return isValid;
}

function clearFieldState(field) {
    field.classList.remove("error", "success");
}

function persistSessionPreference() {
    if (!rememberMeCheckbox?.checked) {
        localStorage.removeItem(STORAGE_KEYS.email);
        localStorage.removeItem(STORAGE_KEYS.role);
        return;
    }

    localStorage.setItem(STORAGE_KEYS.email, emailInput.value.trim());
    localStorage.setItem(STORAGE_KEYS.role, roleSelect.value);
}

function restoreSavedSession() {
    if (!emailInput || !roleSelect || !rememberMeCheckbox) {
        return;
    }

    const savedEmail = localStorage.getItem(STORAGE_KEYS.email);
    const savedRole = localStorage.getItem(STORAGE_KEYS.role);

    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }

    if (savedRole) {
        roleSelect.value = savedRole;
    }
}

function setLoadingState(isLoading) {
    if (!loginButton || !buttonLabel) {
        return;
    }

    loginButton.disabled = isLoading;
    buttonLabel.textContent = isLoading ? "Signing you in..." : "Enter workspace";
}

function showNotification(message, type = "info") {
    if (!notificationRegion) {
        return;
    }

    const toast = document.createElement("div");
    toast.className = `notification notification-${type}`;
    toast.textContent = message;
    notificationRegion.appendChild(toast);

    window.setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-6px)";
        window.setTimeout(() => toast.remove(), 200);
    }, 3200);
}
