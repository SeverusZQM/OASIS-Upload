function updateAvatar() {
  var bgSelect = document.getElementById("background-select");
  var avatarSelect = document.getElementById("avatar-select");
  var bgImg = document.getElementById("background-image");
  var avatarImg = document.getElementById("avatar-image");

  bgImg.src = bgSelect.value;
  avatarImg.src = avatarSelect.value;
}

document.getElementById('register-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault(); 
  }
});

