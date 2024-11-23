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