class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :name
      t.datetime :birthday
      t.text :bio
      t.string :img
      t.string :region

      t.timestamps
    end
  end
end
