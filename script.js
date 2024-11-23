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
            <a href="javascript:void(0);" onclick="openModal()"><i class="fas fa-sign-in-alt"></i> Log in</a>
            <a href="#"><i class="fas fa-cog"></i> Settings</a>
        `;
    }

    // Toggle the visibility of the profile menu
    profileMenu.classList.toggle('show');
}

// Display login form
function openModal() {
    document.getElementById('login-modal').classList.add('show');
}

// Close modal
function closeModal() {
    document.getElementById('login-modal').classList.remove('show');
}

// Simulate logging out
function logout() {
    isLoggedIn = false;
    toggleMenu();  // Update the profile menu after logout
}

// Close menu when clicked outside
document.addEventListener('click', function (event) {
    const profile = document.querySelector('.profile');
    const menu = document.querySelector('.profile-menu');
    if (!profile.contains(event.target)) {
        menu.style.display = 'none';
    }
});