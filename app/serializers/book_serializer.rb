class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :year_published, :genre, :cover_img, :summary, :user_id
  
end
