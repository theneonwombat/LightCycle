@courses.each do |course|
  json.set! course.id do
    json.extract! course, :id, :course_name, :player_id, :created_at, :distance, :time, :static_map, :pins_object
    json.player course.player.playername
    json.avatarUrl url_for(course.player.avatar)
  end
end