class CommentSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comment
  has_one :user
  has_one :poem
  has_one :book
end
