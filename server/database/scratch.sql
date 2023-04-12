CREATE TABLE ticks (
  id SERIAL PRIMARY KEY NOT NULL,
  date TIMESTAMP,
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
  wall VARCHAR(500)
);

INSERT INTO ticks (id, date, route, grade, notes, average_rating, style, lead_style, route_type, length, location, region, subregion, area, wall)
VALUES (1, '2023-02-28 10:00:00', 'Cat Walk', '5.10a/b', '', 2.4, 'Lead', 'Redpoint', 'Sport', 40, 'Nevada', 'Southern Nevada', 'Red Rocks', '03-First Pullout (Calico I)', 'Dog Wall');





SELECT json_agg(json_build_object(
  'tick_id', a.id,
  'tick_date', a.date,
  'tick_grade', a.grade,
  'average_rating', a.average_rating,
  'style', a.style,
  'lead_style', a.lead_style,
  'route_type', a.route_type,
  'length', a.length,
  'location', a.location,
  'region', a.region,
  'subregion', a.subregion,
  'area', a.area,
  'wall', a.wall,
  'reported', a.reported
)) FROM t a;