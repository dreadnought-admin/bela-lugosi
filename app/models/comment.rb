class Comment < ApplicationRecord
    belongs_to :poem
    belongs_to :book
    belongs_to :user
end
