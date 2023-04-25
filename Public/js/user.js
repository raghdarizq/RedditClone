const main2 = document.querySelector("main")
const userNameT = document.getElementById('userNameT')
const userHederImg = document.querySelector('.userHederImg')
const userImg = document.querySelector('.userImg')

const createPostUser = (data) => {
  main2.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    const containerPost = document.createElement('div');
    containerPost.classList.add('containerPost');

    const userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');

    const userImg = document.createElement('img');
    userImg.src = data[i].avataruser;
    userImg.classList.add('userImg');
    userInfo.appendChild(userImg);

    const userName = document.createElement('p');
    userName.textContent = data[i].username + " " + data[i].created_at;
    userName.classList.add('userName');
    userInfo.appendChild(userName);

    const trash = document.createElement("img");
    trash.src = "../img/trash.png";
    trash.alt = "";
    trash.className = "trash";
    userInfo.appendChild(trash);

    containerPost.appendChild(userInfo);

    const potContent = document.createElement('div');
    potContent.classList.add('PotContent');
    potContent.textContent = data[i].content;
    containerPost.appendChild(potContent);

    const imgPost = document.createElement('img');
    imgPost.src = data[i].photo_post;
    imgPost.alt = '';
    imgPost.classList.add('imgPost');
    containerPost.appendChild(imgPost);

    main2.appendChild(containerPost);
    trash.addEventListener('click', () => {
      fetch(`/posts/delete/${data[i].id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json text/plain */*",
          'Content-Type': 'application/json',
        }
      })
        .then((res) => {
          res.json()
          fetchDataUser()
        })
    });
  }


}
fetch('/users/SinInUsers', {
  method: "GET",
  headers: {
    Accept: "application/json text/plain */*",
    'Content-Type': 'application/json',
  }
})
  .then((res) => {
    res.json()
    const username = document.cookie.split(';').find(cookie => cookie.startsWith('username=')).split('=')[1];
    const avatarCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('avataruser='));
    const avataruser = avatarCookie ? decodeURIComponent(avatarCookie.split('=')[1]) : '';
    userNameT.innerHTML = username;
    userHederImg?.setAttribute('src', avataruser);
    userImg?.setAttribute('src', avataruser);

  })

  const fetchDataUser = ()=>{
    
    fetch("/posts/getUserPost", {
      method: "GET",
      headers: {
        Accept: "application/json text/plain */*",
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => (createPostUser(data)))
  }
  fetchDataUser()