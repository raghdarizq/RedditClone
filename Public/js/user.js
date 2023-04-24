import { createPost } from './index';

fetch("/posts/getUserPost", {
  method: "GET",
  headers: {
    Accept: "application/json text/plain */*",
    'Content-Type': 'application/json'
  }
})
  .then((res) => res.json())
  .then((data) => (createPost(data)))