const signupModal = document.getElementById('signupModal');

function openSignUp() {
  signupModal.style.display = 'flex';
}

function closeSignUp() {
  signupModal.style.display = 'none';
}

// Close the modal when clicking outside it
window.onclick = function(event) {
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
};
