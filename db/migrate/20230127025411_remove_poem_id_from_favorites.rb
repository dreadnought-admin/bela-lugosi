class RemovePoemIdFromFavorites < ActiveRecord::Migration[7.0]
  def change
    remove_column :favorites, :poem_id, :bigint
  end
end
