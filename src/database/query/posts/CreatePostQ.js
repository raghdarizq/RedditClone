const connection = require('../../config/config');
const getPost = (myToken) => {
  const sql = {
    text: `select 
    posts.content, posts.photo_Post, users.avatarUser, users.username, posts.created_at
    from posts 
    join users 
    on users.id = posts.user_id
    where users.id = $1`,
    values: [myToken.id]
  };
  return connection.query(sql);
};
const CreatePostQ = (userData, myToken) => {
  const user_id = myToken.id
  const { content, photo_Post } = userData;

  const sql = {
    text: `INSERT INTO posts (content, photo_Post, user_id) VALUES ($1, $2, $3)`,
    values: [content, photo_Post, user_id]
  }

  return connection.query(sql)
}



module.exports = {CreatePostQ,getPost};


