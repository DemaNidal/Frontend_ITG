document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  
  fetch("../users.json")
    .then(response => response.json())
    .then(data => {
      
      var user = data.users.find(user => user.username === username && user.password === password);
    
      if (user) {
        
        window.location.href = "../home.html";
      } else {
        
        document.getElementById("errorMessage").textContent = "Invalid username or password";
      }
    })
    .catch(error => console.error("Error fetching users:", error));
});
