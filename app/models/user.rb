class User < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :books, dependent: :destroy
    has_many :poems, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :favorited_poems, through: :favorites, source: :poem

    has_secure_password
    validates :password_digest, presence: true
    validates :username, presence: true
end
