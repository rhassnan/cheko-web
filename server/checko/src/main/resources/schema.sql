CREATE TABLE IF NOT EXISTS menu (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  price FLOAT,
  calorie INTEGER,
  category VARCHAR(255),
  image VARCHAR(255),
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION
);