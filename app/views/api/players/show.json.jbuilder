json.set! @player.id do
  json.extract! @player, :id, :playername, :created_at, :bio, :location
  json.courses @player.courses
  json.avatarUrl url_for(@player.avatar)
end