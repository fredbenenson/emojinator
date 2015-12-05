class CreateContributors < ActiveRecord::Migration
  def change
    create_table :contributors do |t|
      t.string :email, null: false
      t.timestamps null: false
    end
  end
end
