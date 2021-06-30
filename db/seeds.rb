# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Player.destroy_all

#players
neon = Player.create!(
  playername: "neonwombat",
  password: "saltysquirrel",
)

tron = Player.create!(
  playername: "tron",
  password: "fortheuser",
)

ram = Player.create!(
  playername: "ram",
  password: "thisguydies",
)

mpc = Player.create!(
  playername: "MPC",
  password: "fucktheuser",
)

#open avatars
neonAvatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/wombat_full.jpg')
tronAvatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_tron.png')
ramAvatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_ram.jpg')
mpcAvatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/MPC.png')

#attach avatars
neon.avatar.attach(io: neonAvatar, filename: 'wombat_full.jpg')
tron.avatar.attach(io: tronAvatar, filename: 'old_tron.png')
ram.avatar.attach(io: ramAvatar, filename: 'old_ram.jpg')
mpc.avatar.attach(io: mpcAvatar, filename: 'MPC.png')