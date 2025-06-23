document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            sidebar.classList.toggle('show'); 
        } else {
            sidebar.classList.toggle('collapsed'); 
            body.classList.toggle('sidebar-collapsed'); 
        }
    });
});
