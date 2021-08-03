json.extract! player, :id, :playername, :bio, :location
json.createdAt player.created_at
json.courses player.courses
json.avatarUrl url_for(player.avatar)
json.numCourses player.num_courses
json.totalDistance player.total_distance
json.lastCourse player.last_course