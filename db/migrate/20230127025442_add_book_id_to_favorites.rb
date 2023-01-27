class AddBookIdToFavorites < ActiveRecord::Migration[7.0]
  def change
    add_column :favorites, :book_id, :bigint
  end
end
