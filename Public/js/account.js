const form = document.querySelector(".formLogin");
const wearing = document.getElementById("wearing");
const singupForm = document.querySelector(".singupForm");

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const obj = new FormData(form)
  const data = Object.fromEntries(obj)


  fetch('/users/SinInUsers', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
    .then((data) => {
      if (data.message === "Done") {
        window.location.href = ("/page/homePage")
      }
      else if (data.message === "Password  is not correct") {
        wearing.innerHTML = "Password is not correct"

      }
      return data;
    })
})

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
    .then(() => window.location.href = "page/singin")
})