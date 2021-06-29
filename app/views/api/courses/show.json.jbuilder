json.set! @course.id do
  json.extract! @course, :id, :course_name, :player_id, :created_at, :distance, :time, :pins_object
  json.player @course.player.playername
end