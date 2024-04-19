function toggleMenu() {
  var menu = document.querySelector('.drop_menu');
  menu.classList.toggle('active');

}

document.querySelectorAll('.nav a').forEach(item => {
  item.addEventListener('click', event => {
      event.preventDefault();
      const page = item.getAttribute('href');
      window.location.href = page;
  });
});

document.querySelectorAll('.drop_menu a').forEach(item => {
  item.addEventListener('click', event => {
      event.preventDefault();
      const page = item.getAttribute('href');
      window.location.href = page;
  });
});
