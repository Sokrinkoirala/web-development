function googleLogin() {
    // Placeholder for Google OAuth login
    console.log("Google login clicked");
    alert("Google login functionality to be implemented.");
  }
  
  function toggleForm() {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const title = document.getElementById('title');
    const toggleText = document.querySelector('.toggle');
  
    if (signupSection.style.display === 'none') {
      loginSection.style.display = 'none';
      signupSection.style.display = 'block';
      title.innerText = 'Sign Up';
      toggleText.innerText = 'Login';
    } else {
      loginSection.style.display = 'block';
      signupSection.style.display = 'none';
      title.innerText = 'Login';
      toggleText.innerText = 'Sign Up';
    }
  }
  
  function submitSignup() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const nepali = document.querySelector('input[name="nepali"]:checked')?.value;
  
    if (!name || !contact || !nepali) {
      alert("Please fill in all the fields.");
      return;
    }
  
    console.log({
      name: name,
      contact: contact,
      nepali: nepali
    });
    
    alert("Sign-up details submitted!");
  }
  
  // Initialize touch effects after the DOM has loaded
  document.addEventListener('DOMContentLoaded', () => {
    // You can add any additional initialization code here
  });
  