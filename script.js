document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const navLinks = document.querySelectorAll('.navbar a');

    toggleButton.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            sidebar.classList.toggle('show');
        } else {
            sidebar.classList.toggle('collapsed');
            body.classList.toggle('sidebar-collapsed');
        }
    });

    // auto collapse side bar after clicking on smaller screens
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('show');
            }
        });
    });
});
