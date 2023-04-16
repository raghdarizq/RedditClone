const main = document.querySelector('main');

const createPost = (data) => {
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

    main.appendChild(containerPost);
}
}
fetch(("posts/getPosts"), {
  method: "Get",
  headers: {
    Accept: "application/json text/plain */*",
    'Content-Type': 'application/json',
  },
}).then((res) => (res.json())).then((data) => {
  createPost(data.data)
  console.log(data.data[0].photo_post)
}).catch(error => console.error(error))

