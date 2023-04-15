
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = new FormData(form);
  const data = Object.fromEntries(obj);
  fetch('/users/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    // .then(() => window.location.href = "/Public/html/singinPage.html")
})