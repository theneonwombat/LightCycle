class RemoveAvatarColumnFromPlayers < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :avatar
  end
end
