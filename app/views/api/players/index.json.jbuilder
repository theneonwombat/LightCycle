@players.each do |player|
  json.set! player.id do
    json.extract! player, :id, :playername, :bio, :location, :avatar, :created_at
  end
end