let isLoggedIn = false; // Track login status (default is false)

// Toggle the Profile menu to show the correct options based on login state
function toggleMenu() {
    const profileMenu = document.getElementById('profile-menu');
    
    if (isLoggedIn) {
        profileMenu.innerHTML = `
            <a href="#"><i class="fas fa-user"></i> Profile</a>
            <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        `;
    } else {
        profileMenu.innerHTML = `
            <a href="javascript:void(0);" onclick="showLoginForm()"><i class="fas fa-sign-in-alt"></i> Log in</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        `;
    }

    profileMenu.classList.toggle('show');
}

// Display login form
function showLoginForm() {
    document.getElementById('form-container').style.display = 'flex';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Display register form
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Simulate logging out
function logout() {
    isLoggedIn = false;
    toggleMenu();  // Update the profile menu after logout
}