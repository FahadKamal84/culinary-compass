DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE NOT NULL,
  comment VARCHAR(255) NOT NULL
);