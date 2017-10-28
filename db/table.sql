CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(180),
last_name VARCHAR(180),
gender VARCHAR(180),
hair_color VARCHAR(180),
eye_color VARCHAR(180),
hobby VARCHAR(180),
birth_day VARCHAR(2),
birth_month VARCHAR(10),
birth_year VARCHAR(4),
auth_id TEXT
)