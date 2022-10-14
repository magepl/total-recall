const modal = document.getElementById('sign-in-modal');
const logInBtn = document.getElementById('log-in-btn');
const cancelSignIn = document.getElementById('cancel-sign-in-modal-btn');

logInBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'inline';
});

cancelSignIn.addEventListener('click', function () {
  modal.style.display = 'none';
});

const signUpModal = document.getElementById('sign-up-modal');
const signUpBtn = document.getElementById('sign-up-btn');
const cancelSignUp = document.getElementById('cancel-sign-up-modal-btn');

signUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signUpModal.style.display = 'inline';
});

cancelSignUp.addEventListener('click', function () {
  signUpModal.style.display = 'none';
});
