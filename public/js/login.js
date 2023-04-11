const loginFormHandler = async (event) => {
    event.preventDefault();

        const email = document.getElementById('User-Name').value.trim();
        const password = document.getElementById('Password').value.trim();

        if (email && password) {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
              
            });

            if (response.ok) {
                document.location.replace('/')
            } else {
                alert('Incorrect email or password. Please try again.')
            }
        }
};

const signup = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    console.log(name, email, password);

    if (name && email && password) {
        const response = await fetch('http://localhost:3000/api/users/users/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: name, email: email, password: password }),
        });
    
        if (response.ok) {
            document.location.replace('/');
          } else {
            alert(response.statusText);
          }
        }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signup);

// document
//     .querySelector('.login-input')
//     .addEventListener('submit', loginFormHandler);

