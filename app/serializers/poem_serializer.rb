class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :poem_type, :genre, :year_published, :poem_txt
end
