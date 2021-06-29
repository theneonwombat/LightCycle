json.set! @player.id do
  json.extract! @player, :id, :playername, :created_at, :bio, :location
  json.courses @player.courses

end