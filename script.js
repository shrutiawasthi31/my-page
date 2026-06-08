// Password Toggle Functionality
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePasswordBtn.classList.toggle('active');
    });
}

// Form Submission
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Validate form
        if (!email || !password || !role) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Simulate login process
        const loginBtn = loginForm.querySelector('.login-btn');
        const originalText = loginBtn.textContent;
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Store user data in localStorage if "Remember Me" is checked
            if (rememberMe) {
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userRole', role);
            }

            // Show success message
            showNotification('Login successful!', 'success');
            
            // Simulate redirect after 1.5 seconds
            setTimeout(() => {
                // You can redirect to dashboard or home page
                window.location.href = '#'; // Change this to your dashboard URL
            }, 1500);
        }, 1500);
    });

    // Restore email if "Remember Me" was previously checked
    window.addEventListener('load', () => {
        const savedEmail = localStorage.getItem('userEmail');
        const savedRole = localStorage.getItem('userRole');
        
        if (savedEmail) {
            document.getElementById('email').value = savedEmail;
            document.getElementById('rememberMe').checked = true;
        }
        
        if (savedRole) {
            document.getElementById('role').value = savedRole;
        }
    });
}

// Forgot Password Link
const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Password reset link has been sent to your email', 'info');
    });
}

// Social Login Buttons
const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.classList.contains('google-btn') 
            ? 'Google' 
            : btn.classList.contains('facebook-btn') 
            ? 'Facebook' 
            : 'LinkedIn';
        showNotification(`Redirecting to ${provider}...`, 'info');
        // Implement actual OAuth redirect here
    });
});

// Sign Up Link
const signUpLink = document.querySelector('.signup-link a');
if (signUpLink) {
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '#signup'; // Change to your signup page
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles dynamically if not already in CSS
    if (!document.getElementById('notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 24px;
                border-radius: 8px;
                font-size: 0.95rem;
                font-weight: 500;
                z-index: 9999;
                animation: slideInRight 0.3s ease-out;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }

            .notification-success {
                background-color: #28a745;
                color: white;
            }

            .notification-error {
                background-color: #dc3545;
                color: white;
            }

            .notification-info {
                background-color: #17a2b8;
                color: white;
            }

            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }

            @media (max-width: 640px) {
                .notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Input validation feedback
const emailInput = document.getElementById('email');
const passwordInput2 = document.getElementById('password');
const roleSelect = document.getElementById('role');

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !isValidEmail(emailInput.value)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}

if (passwordInput2) {
    passwordInput2.addEventListener('input', () => {
        if (passwordInput2.value) {
            passwordInput2.classList.remove('error');
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + L to focus login button
    if (e.altKey && e.key === 'l') {
        const loginBtn = loginForm?.querySelector('.login-btn');
        if (loginBtn) loginBtn.focus();
    }
    
    // Enter on form to submit
    if (e.key === 'Enter' && loginForm && document.activeElement !== loginForm.querySelector('.login-btn')) {
        if (document.activeElement === emailInput || 
            document.activeElement === passwordInput2 || 
            document.activeElement === roleSelect) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    }
});

// Console log for debugging
console.log('Login page initialized successfully');