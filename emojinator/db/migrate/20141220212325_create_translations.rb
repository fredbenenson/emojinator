class CreateTranslations < ActiveRecord::Migration
  def change
    create_table :translations do |t|
      t.belongs_to :contributor
      t.belongs_to :phrase
      t.string :language_code, null: false
      t.text :text, null: false
      t.text :additional_notes
      t.integer :click_count
      t.integer :time_on_page
      t.text :user_agent
      t.timestamps null: false
    end
  end
end
