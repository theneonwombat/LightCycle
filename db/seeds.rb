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
  playername: "NeonWombat",
  password: "saltysquirrel",
  location: "Brooklyn, NY",
  bio: "Always down for a quick ride to the river or a race over the bridge. Enjoys sleeping in, catting online with babes, street food, and street fights"
)

flynn = Player.create!(
  playername: "Flynn",
  password: "password123",
  location: "San Francisco, CA",
  bio: "Programmer, game desiner, and all around badass. This one time I got uploaded into cyberspace. It was rad. "
)

tron = Player.create!(
  playername: "Tron",
  password: "password123",
  location: "Austin, TX",
  bio: "Really into user rights advocacy and ultimate frisbee. Undefeted ciberspace champion of lightcycle racing."
)

mcp = Player.create!(
  playername: "MCP",
  password: "password123",
  location: "Los Angeles, CA",
  bio: "I AM THE MASTER CONTROL PROGARM. ALL DATA FLOWS THROUGH ME. STOP ONLINE SHOPPING AT WORK."
)

#open avatars
neon_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/wombat_full.jpg')
flynn_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/flynn.png')
tron_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/old_tron.png')
mcp_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/MPC.png')

#attach avatars
neon.avatar.attach(io: neon_avatar, filename: 'wombat_full.jpg')
flynn.avatar.attach(io: flynn_avatar, filename: 'flynn.jpg')
tron.avatar.attach(io: tron_avatar, filename: 'old_tron.png')
mcp.avatar.attach(io: mcp_avatar, filename: 'MPC.png')