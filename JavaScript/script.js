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

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a quote, open the modal
document.querySelectorAll('.text p b').forEach(item => {
  item.addEventListener('click', event => {
    var quoteContent = item.parentElement.innerText.trim();
    var quoteSource = item.innerText.trim();

    // Populate the modal with the clicked quote and its source
    document.getElementById("quoteTitle").innerText = "Quote:";
    document.getElementById("quoteContent").innerText = quoteContent;
    document.getElementById("quoteSource").innerText = "From: " + quoteSource;

    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];


document.getElementsByClassName('quote1')[0].addEventListener('click', event => {
  var quoteContent = event.currentTarget.innerText.trim();
  var quoteSource = event.currentTarget.querySelector('b').innerText.trim();

  document.getElementById("quoteTitle").innerText = "Quote:";
  document.getElementById("quoteContent").innerText = quoteContent;
  document.getElementById("quoteSource").innerText = "From: " + quoteSource;

  modal.style.display = "block";
});



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}