class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :picture
      t.string :name
      t.integer :phone

      t.timestamps
    end
  end
end
