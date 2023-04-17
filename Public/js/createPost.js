const formPost = document.querySelector(".form");
formPost.addEventListener('submit',(e)=>{
  e.preventDefault();
  const obj = new FormData(formPost);
  const data = Object.fromEntries(obj);
  fetch("/posts/create",{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify(data)
  }).then(result => result.json())
})

