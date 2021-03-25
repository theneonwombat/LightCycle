class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.integer :player_id, null: false
      t.string :course_name
      t.string :distance
      t.string :time
      t.string :pins_object

      t.timestamps
    end
    add_index :courses, :player_id
  end
end
