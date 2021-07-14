json.extract! player, :id, :playername, :bio, :location

json.set! "user" do
  json.partial! "api/users/user", user: @user
end

json.extract! user, :id, :email, :first_name, :last_name, :created_at