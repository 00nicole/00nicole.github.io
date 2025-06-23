const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const body = document.body;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  body.classList.toggle('sidebar-collapsed');
});
