function signupFormHandler(event) {
    console.log("in event handler"); 
    event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(username)
  console.log(password)
  if (username && password) {
    console.log("in if block");
    fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {console.log(response)})
  }
}
alert("help in trapped in the computer")
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);