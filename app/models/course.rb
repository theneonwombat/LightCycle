class Course < ApplicationRecord
  validates :player_id, presence: true

  has_many :courses
  
end
