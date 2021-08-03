class Course < ApplicationRecord
  validates :player_id, presence: true

  belongs_to :player
  
end