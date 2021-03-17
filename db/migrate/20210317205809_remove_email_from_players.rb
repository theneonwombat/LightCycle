class RemoveEmailFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :email
  end
end