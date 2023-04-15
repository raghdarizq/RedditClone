// const Swal = window.Swal;
const form = document.querySelector("form")
const wearing = document.getElementById("wearing")

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
  }).then((res)=>res.json())
  .then((data) => {
    if (data.message === "Done") {
      window.location.href = ("/")
    }
    else if (data.message === "Password  is not correct") {
      wearing.innerHTML = "Password is not correct"
    }
    return data;
  })
})