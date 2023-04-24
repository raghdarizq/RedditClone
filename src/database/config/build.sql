BEGIN;

DROP TABLE IF EXISTS users, posts, comments,vote;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  avatarUser VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content TEXT,
  photo_Post VARCHAR(500) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content TEXT,
  user_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE vote (
  id SERIAL PRIMARY KEY,
  vote INTEGER CHECK (vote = 1),
  user_id INTEGER NOT NULL UNIQUE,
  post_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- INSERT INTO users(username, email, password, avatarUser) VALUES ('admin','admin@localhost.com','$2a$10$hcarVj2MRTYH8uKUwavEouyMoozBb35piGNg.ssd3Uv5CNzVIR8xq','https://i.pinimg.com/564x/31/1b/2d/311b2def17cba6b7f05ac1d2ea976786.jpg');
-- INSERT INTO users(username, email, password, avatarUser) VALUES ('user','user@localhost.com','$2a$10$7T7ral8QCgnm9NM5wmEFxOTy7r9F6TOmvrWFsBAkn5IwSvTdgj6.K', 'https://i.pinimg.com/564x/aa/9a/91/aa9a91a270416d5bb3018f837c02c535.jpg');

-- INSERT INTO posts (  content, photo_Post, user_id) VALUES ('JavaScript is a client-side scripting language' ,'https://cms-assets.themuse.com/media/lead/_800x418_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879', 1);
-- INSERT INTO posts (  content, photo_Post, user_id) VALUES ('HTML is a markup language for creating web pages' ,'https://cms-assets.themuse.com/media/lead/_800x418_crop_center-center_82_none/01212022-1047259374-coding-classes_scanrail.jpg?mtime=1642798879', 2);

COMMIT;
