# == Schema Information
#
# Table name: players
#
#  id              :bigint           not null, primary key
#  playername      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Player < ApplicationRecord

  validates :playername, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  
  attr_reader :password

  has_many :courses
  has_one_attached :avatar #AWS

  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def check_password?(password)
    potato = BCrypt::Password.new(self.password_digest)
    potato.is_password?(password)
  end

  def self.find_by_credentials(playername, password)
    player = Player.find_by(playername: playername)

    if player && player.check_password?(password)
      player
    else
      nil
    end
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
  end

  def num_courses
    self.courses.count
  end

end
