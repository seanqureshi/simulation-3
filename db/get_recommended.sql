select * from users
join friends on friends.user_a = users.id
where users.id != $1