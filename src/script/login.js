document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('to-login');
    const registerLink = document.getElementById('to-register');

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchForm('login-form');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchForm('register-form');
        });
    }
});

function switchForm(formId) {
    document.querySelectorAll('.form-content').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(formId).classList.add('active');
}
