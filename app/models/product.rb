class Product < ApplicationRecord
    has_many :orders, through: :order_items
    has_many :order_items, dependent: :destroy
end
