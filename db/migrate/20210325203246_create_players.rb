class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :playername, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
  end
end
