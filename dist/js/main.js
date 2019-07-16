// Menu
const menuButtons = document.querySelectorAll('.menu button');

function handleMenu() {
  menuButtons.forEach(button => button.classList.remove('active'));
  this.classList.add('active');
}

menuButtons.forEach(button => button.addEventListener('click', handleMenu));

// Some comment
