class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :course_id, null: false
      t.integer :ord

      t.timestamps
    end

    add_index :pins, :course_id
  end
end
