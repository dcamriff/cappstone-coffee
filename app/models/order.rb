class Order < ApplicationRecord
  belongs_to :order_status
  has_many :products, :through => :order_items
  has_many :order_items, dependent: :destroy
end
