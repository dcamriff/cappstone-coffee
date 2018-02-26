class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.decimal :subtotal, precision: 12, scale: 3
      t.decimal :tax, precision: 12, scale: 3
      t.decimal :tip, precision: 12, scale: 3
      t.decimal :total, precision: 12, scale: 3
      t.string :status
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
