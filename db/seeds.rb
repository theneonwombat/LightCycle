# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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

# #courses
# redhookride = Course.create!(
#   player_id: neon.id,
#   name: "Redhook Ride"
# )

# #pins
# grandarmy = Pin.create!(
#   lat: 40.672396,
#   lng: -73.969830,
#   course_id: redhookride.id
# )

# redhook = Pin.create!(
#   lat: 40.675729,
#   lng: -74.018285,
#   course_id: redhookride.id
# )
