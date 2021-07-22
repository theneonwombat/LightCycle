json.extract! player, :id, :playername, :bio, :location

json.set! "user" do
  json.partial! "api/users/user", user: @user
end

json.extract! user, :id, :email, :first_name, :last_name, :created_at

  json.extract! @player, :id, :playername, :created_at, :bio, :location
  json.courses @player.courses
  json.avatarUrl url_for(@player.avatar)
  json.numCourses @num_courses
  json.totalDistance @player.total_distance