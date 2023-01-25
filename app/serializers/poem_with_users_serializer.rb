class PoemWithUsersSerializer < ActiveModel::Serializer
  has_one :user
  attributes :id, :title, :author, :poem_type, :genre, :year_published, :poem_txt
end
