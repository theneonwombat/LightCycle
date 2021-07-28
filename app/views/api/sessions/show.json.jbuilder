json.set! @player.id do
    json.partial! "api/players/player", player: @player
end