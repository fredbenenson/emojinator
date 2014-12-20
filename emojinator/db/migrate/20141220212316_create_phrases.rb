class CreatePhrases < ActiveRecord::Migration
  def change
    create_table :phrases do |t|
      t.text :original_text, null: false
      t.string :language_code, null: false
      t.timestamps null: false
    end
  end
end
