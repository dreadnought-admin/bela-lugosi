class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :books
  has_many :poems
  has_many :favorites
  has_many :comments
end
