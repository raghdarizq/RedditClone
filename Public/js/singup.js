
const singupForm = document.querySelector(".singupForm");

singupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = new FormData(singupForm);
  const data = Object.fromEntries(obj);
  fetch('/users/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    // .then(() => window.location.href = "/page/sing")
})