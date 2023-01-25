class Favorite < ApplicationRecord
    belongs_to :user
    # belongs_to :book
    belongs_to :poem
end
