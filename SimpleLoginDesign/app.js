// User Data
const USER = {
    username: 'admin',
    password: 12345
};

// Login Function
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Get Form Data
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Validate Credentials
    if(usernameInput === USER.username && passwordInput === USER.password)
    {
        alert("Welcome");
        errorMessage.style.display = 'none';
    }
    else{
        errorMessage.textContent = "User or password are incorrect";
        errorMessage.style.display = 'block';
    }
});