@courses.each do |course|
  json.set! course.id do
    json.extract! course, :player_id, :id, :course_name, :distance, :time, :pins_object, :created_at
  end
end