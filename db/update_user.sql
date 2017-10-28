UPDATE users
SET first_name = $2, last_name = $3, gender = $4, hair_color = $5, eye_color = $6, hobbies = $7, birthday_day = $8, birthday_month = $9, birthday_year = $10
WHERE id = $1;