function toggleMenu() {
    const menu = document.querySelector('.profile-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close menu when clicked outside
document.addEventListener('click', function (event) {
    const profile = document.querySelector('.profile');
    const menu = document.querySelector('.profile-menu');
    if (!profile.contains(event.target)) {
        menu.style.display = 'none';
    }
});

let isLoggedIn = false;  // Track login status (default is false)

function toggleMenu() {
    const profileMenu = document.getElementById('profile-menu');
    const loginOption = document.getElementById('login-option');

    // Check if the user is logged in or not
    if (isLoggedIn) {
        // Change menu to logged-in options
        profileMenu.innerHTML = `
            <a href="#"><i class="fas fa-user"></i> Profile</a>
            <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        `;
    } else {
        // Change menu to guest options
        profileMenu.innerHTML = `
            <a href="#" id="login-option"><i class="fas fa-sign-in-alt"></i> Log in</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        `;
    }

    // Toggle the menu visibility
    profileMenu.classList.toggle('show');
}

// This function simulates logging in and changes the menu accordingly
function login() {
    isLoggedIn = true;
    toggleMenu(); // Update the menu after login
}

// This function simulates logging out and reverts the menu
function logout() {
    isLoggedIn = false;
    toggleMenu(); // Update the menu after logout
}