const loginFormHandler = async (event) => {
    event.preventDefault();

        const email = document.querySelector('#User-Name').value.trim();
        const password = document.querySelector('Password').value.trim();

        if (email && password) {
            const response = await fetch('api/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: { 'Content Type': 'application/json'}
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

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#Password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to signup. Please try again.');
        }
    }
};

document
    .querySelector('.login-input')
    .addEventListener('submit', signup);

document
    .querySelector('.signUp-Input')
    .addEventListener('submit', loginFormHandler);