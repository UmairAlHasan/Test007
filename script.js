// Function to toggle the profile menu
function toggleMenu() {
    const profileMenu = document.querySelector('.profile-menu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

// Close the menu if clicking outside
window.addEventListener('click', (e) => {
    const profile = document.querySelector('.profile');
    const profileMenu = document.querySelector('.profile-menu');
    if (!profile.contains(e.target)) {
        profileMenu.style.display = 'none';
    }
});