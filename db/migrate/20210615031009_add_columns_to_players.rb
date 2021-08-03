class AddColumnsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :bio, :text
    add_column :players, :location, :string
    add_column :players, :avatar, :string
  end
end
