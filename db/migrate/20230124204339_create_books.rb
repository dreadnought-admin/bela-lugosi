class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :year_published
      t.string :genre
      t.string :cover_img
      t.text :summary
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
