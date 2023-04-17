DROP DATABASE IF EXISTS routesandratings;
CREATE DATABASE routesandratings;

\c routesandratings;

CREATE TABLE ticks (
  id SERIAL PRIMARY KEY NOT NULL,
  date VARCHAR,
  route TEXT,
  grade VARCHAR(20),
  notes TEXT,
  average_rating NUMERIC(2, 1),
  style VARCHAR(20),
  lead_style VARCHAR(20),
  route_type VARCHAR(20),
  length INTEGER,
  location VARCHAR(500),
  region VARCHAR(500),
  subregion VARCHAR(500),
  area VARCHAR(500),
  wall VARCHAR(500),
  reported BOOLEAN DEFAULT FALSE,
  starred BOOLEAN DEFAULT FALSE
);

CREATE TABLE areas (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  path_tokens VARCHAR[],
  description TEXT,
  total_climbs INTEGER,
  coordinates POINT
);

CREATE TABLE climbs (
  id SERIAL PRIMARY KEY NOT NULL,
  area_id INTEGER,
  name TEXT NOT NULL,
  yds VARCHAR(20),
  fa TEXT,
  type VARCHAR(20),
  safety TEXT,
  description TEXT,
  protection TEXT,
  location TEXT,
  left_right_index INTEGER,
  FOREIGN KEY (area_id) REFERENCES areas(id)
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR(100),
  rating INTEGER,
  route_id INTEGER,
  name VARCHAR(100),
  grade VARCHAR(20)
);

CREATE TABLE climbers (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)
);

CREATE INDEX route_id_index ON routes (route_id);

COPY ticks FROM '/Users/aimeekang/HackReactor/MVP/AK-MVP/server/database/data/ticks.csv' WITH (FORMAT CSV, HEADER true);
COPY routes FROM '/Users/aimeekang/HackReactor/MVP/AK-MVP/server/database/data/routes.csv' WITH (FORMAT CSV, HEADER true);
COPY ratings FROM '/Users/aimeekang/HackReactor/MVP/AK-MVP/server/database/data/ratings.csv' WITH (FORMAT CSV, HEADER true);
COPY climbers FROM '/Users/aimeekang/HackReactor/MVP/AK-MVP/server/database/data/climbers.csv' WITH (FORMAT CSV, HEADER true);

-- SELECT setval('ticks_id_seq', (SELECT MAX(id) FROM ticks));
-- SELECT setval('routes_id_seq', (SELECT MAX(id) FROM routes));
-- SELECT setval('ratings_id_seq', (SELECT MAX(id) FROM ratings));
-- SELECT setval('climbers_id_seq', (SELECT MAX(id) FROM climbers));


ALTER TABLE ticks ALTER COLUMN date TYPE bigint USING date::bigint;