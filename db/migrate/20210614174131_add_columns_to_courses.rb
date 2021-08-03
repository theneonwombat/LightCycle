class AddColumnsToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :description, :string
    add_column :courses, :travel_mode, :string
    add_column :courses, :static_map, :text
  end
end
