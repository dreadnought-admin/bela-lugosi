class BookWithUsersSerializer < ActiveModel::Serializer
  has_one :user
  attributes :id, :title, :author, :year_published, :genre, :cover_img, :summary, :user_id
end
