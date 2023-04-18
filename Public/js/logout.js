const logout = document.querySelector(".logout")

logout.addEventListener("click",()=>{
  fetch('/users/logout',{
    method:"GET",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(()=>{
    window.location.href = ("/users/SinInUsers")
  })
})