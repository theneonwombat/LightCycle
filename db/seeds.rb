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
neon_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/wombat_full.jpg')
tron_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_tron.png')
ram_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_ram.jpg')
mpc_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/MPC.png')

#attach avatars
neon.avatar.attach(io: neon_avatar, filename: 'wombat_full.jpg')
tron.avatar.attach(io: tron_avatar, filename: 'old_tron.png')
ram.avatar.attach(io: ram_avatar, filename: 'old_ram.jpg')
mpc.avatar.attach(io: mpc_avatar, filename: 'MPC.png')