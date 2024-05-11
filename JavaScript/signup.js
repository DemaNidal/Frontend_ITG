document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var newUser = {
    username: username,
    password: password
  };

  // Fetch the existing users data from the JSON file
  fetch("../users.json")
    .then(response => response.json())
    .then(data => {
      // Append the new user to the existing users array
      data.users.push(newUser);

      // Convert the updated data back to JSON format
      var updatedData = JSON.stringify(data);
    
      fetch("../users.json", {
        method: "POST", // Change PUT to POST
        headers: {
          "Content-Type": "application/json"
        },
        body: updatedData
      })
      .then(response => {
        if (response.ok) {
          // Display success message
          document.getElementById("successMessage").textContent = "Sign up successful!";
        } else {
          console.error("Failed to update users data:", response.status);
        }
      })
      .catch(error => console.error("Error updating users data:", error));
    })
    .catch(error => console.error("Error fetching users data:", error));
});
