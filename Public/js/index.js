const main = document.querySelector('main');
const userNameT = document.getElementById('userNameT')
const userHederImg = document.querySelector('.userHederImg')
const userImg = document.querySelector('.userImg')


const createPost = (data) => {
  main.innerHTML = ""
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
    /// comments section 

  const Fetchcomment=()=>{
    fetch(`/Comment/getPostComment?post_id=${data[i].id}`, {
      method: "GET",
      headers: {
        Accept: "application/json text/plain */*",
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const comments = document.createElement('div');
          comments.classList.add('comments');

          const userCommentsInfo = document.createElement('div');
          userCommentsInfo.classList.add('userCommentsInfo');

          const userCommentsImg = document.createElement('img');
          userCommentsImg.setAttribute('src', data[i].avataruser);
          userCommentsImg.setAttribute('alt', '');
          userCommentsImg.classList.add('userImg');

          const commentComponent = document.createElement('div');
          commentComponent.classList.add('commentComponent');

          const commentUserName = document.createElement('p');
          commentUserName.textContent = data[i].username;
          commentUserName.classList.add('userName');

          const commentContent = document.createElement('p');
          commentContent.textContent = data[i].content;
          commentContent.classList.add('commentContent');

          commentComponent.appendChild(commentUserName);
          commentComponent.appendChild(commentContent);

          userCommentsInfo.appendChild(userCommentsImg);

          comments.appendChild(userCommentsInfo);
          comments.appendChild(commentComponent);
          containerPost.appendChild(comments);

        }
      })
  }
  Fetchcomment()


    const commentInput = document.createElement('div');
    commentInput.classList.add('commentInput');

    const form = document.createElement('form');
    form.classList.add('commentForm')

    const formUserCommentsInfo = document.createElement('div');
    formUserCommentsInfo.classList.add('userCommentsInfo');

    const formUserCommentsImg = document.createElement('img');
    const avatarCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('avataruser='));
    const avataruser = avatarCookie ? decodeURIComponent(avatarCookie.split('=')[1]) : '';
    formUserCommentsImg.src=avataruser;
    formUserCommentsImg.setAttribute('alt', '');
    formUserCommentsImg.classList.add('userImg');

    const inputComment = document.createElement('input');
    inputComment.setAttribute('type', 'text');
    inputComment.setAttribute('name', 'content');
    inputComment.setAttribute('placeholder', 'Add a comment...');

    const inputCommentId = document.createElement('input');
    inputCommentId.setAttribute('type', 'number');
    inputCommentId.setAttribute('value', data[i].id);
    inputCommentId.setAttribute('name', 'post_id');
    inputCommentId.classList.add('inputSpecial')


    const postButton = document.createElement('button');
    postButton.setAttribute('type', 'submit');

    postButton.textContent = 'Post';

    formUserCommentsInfo.appendChild(formUserCommentsImg);

    form.appendChild(formUserCommentsInfo);
    form.appendChild(inputComment);
    form.appendChild(inputCommentId);
    form.appendChild(postButton);

    commentInput.appendChild(form);

    containerPost.appendChild(userInfo);
    containerPost.appendChild(potContent);
    containerPost.appendChild(imgPost);
    containerPost.appendChild(commentInput);

    main.appendChild(containerPost);

  }
  const commentForms = document.querySelectorAll(".commentForm");
  commentForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const obj = new FormData(form);
      const data = Object.fromEntries(obj);
      fetch("/Comment/createComment", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(result => {
        result.json()
      })
    })
  });

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

const getDataFetch = () => {
  fetch('/posts/getPosts', {
    method: "GET",
    headers: {
      Accept: "application/json text/plain */*",
      'Content-Type': 'application/json',
    }
  }).then((res) => (res.json()))
    .then((data) => {
      createPost(data.data)
    }).catch(error => console.error(error))
}

getDataFetch();
