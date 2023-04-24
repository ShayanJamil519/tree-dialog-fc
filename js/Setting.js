function openTab(evt, tabName) {
  // Get all the tab content divs
  var tabcontent = document.getElementsByClassName("tab-pane");

  // Hide all the tab content divs
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the selected tab content div
  document.getElementById(tabName).style.display = "block";

  // Remove the "active" class from all tab buttons
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Add the "active" class to the clicked button
  evt.currentTarget.className += " active";
}

window.onload = function () {
  var tabcontent = document.getElementsByClassName("tab-pane");

  // Hide all the tab content divs
  for (var i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the selected tab content div
  document.getElementById(tabName).style.display = "block";

  // Remove the "active" class from all tab buttons
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Add the "active" class to the clicked button
  evt.currentTarget.className += " active";
};

function togglePasswordVisibility1() {
  var passwordField = document.getElementById("currentpassword");
  var passwordToggle = document.getElementById("password-toggle1");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    passwordField.type = "password";
    passwordToggle.innerHTML = '   <i class="bi bi-eye-fill"></i>';
  }
}
function togglePasswordVisibility2() {
  var passwordField = document.getElementById("newpassword");
  var passwordToggle = document.getElementById("password-toggle2");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    passwordField.type = "password";
    passwordToggle.innerHTML = '   <i class="bi bi-eye-fill"></i>';
  }
}
function togglePasswordVisibility3() {
  var passwordField = document.getElementById("confirmpassword");
  var passwordToggle = document.getElementById("password-toggle3");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    passwordField.type = "password";
    passwordToggle.innerHTML = '   <i class="bi bi-eye-fill"></i>';
  }
}
function togglePasswordVisibility4() {
  var passwordField = document.getElementById("password");
  var passwordToggle = document.getElementById("password-toggle4");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
  } else {
    passwordField.type = "password";
    passwordToggle.innerHTML = '   <i class="bi bi-eye-fill"></i>';
  }
}

window.addEventListener("load", function () {
  var editBtn = document.getElementById("edit-image");
  var imgTag = document.querySelector("img");

  editBtn.addEventListener("click", function () {
    var fileInput = document.createElement("input");
    fileInput.type = "file";

    fileInput.addEventListener("change", function () {
      var file = this.files[0];
      var reader = new FileReader();

      reader.addEventListener("loadend", function () {
        imgTag.src = reader.result;
      });

      reader.readAsDataURL(file);
    });

    fileInput.click();
  });
});
