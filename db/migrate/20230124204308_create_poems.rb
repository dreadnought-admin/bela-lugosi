class CreatePoems < ActiveRecord::Migration[7.0]
  def change
    create_table :poems do |t|
      t.string :title
      t.string :author
      t.string :poem_type
      t.string :genre
      t.integer :year_published
      t.text :poem_txt
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
