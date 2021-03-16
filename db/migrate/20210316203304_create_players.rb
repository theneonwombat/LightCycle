class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :playername, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :players, :playername, unique: true
    add_index :players, :email, unique: true
    add_index :players, :session_token, unique: true
  end
end
