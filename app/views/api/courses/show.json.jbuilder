json.extract! @course, :id, :course_name, :player_id, :created_at, :distance, :time, :static_map, :pins_object, :travel_mode, :description
json.player @course.player.playername
json.avatarUrl url_for(@course.player.avatar)