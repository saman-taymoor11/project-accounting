const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const modeToggle = document.getElementById('mode-toggle');
const closeBtn = document.getElementById('close-btn');

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', closeSidebar);

closeBtn.addEventListener('click', closeSidebar);

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('active') &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    closeSidebar();
  }
});

modeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});