// Get book ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const bookId = parseInt(urlParams.get('id'));

// Find book details by ID
const book = data.find(item => item.id === bookId);
//alert(book.make);
// Populate HTML with book details
document.querySelector('.main_image img').src = book.image;
document.querySelector('h3').textContent = book.make;
document.querySelector('h4').textContent = book.price;
document.querySelector('p').textContent = book.description;

