User.destroy_all
Product.destroy_all
Order.destroy_all
OrderItem.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

espresso = Product.create!(
    item: "espresso",
    description: "2 oz gravy espresso, rich and nutty profile",
    image: "https://i.imgur.com/Q65ZQMo.png",
    price: 2.00,
    active: true
)

cortado = Product.create!(
    item: "cortado",
    description: "2 oz espresso, 2 oz steamed milk",
    image: "https://i.imgur.com/9uzEBTm.png",
    price: 3.00,
    active: true
)

cappuccino = Product.create!(
    item: "cappuccino",
    description: "2 oz espresso, 4 oz steamed milk",
    image: "https://i.imgur.com/20V8M2e.png",
    price: 3.50,
    active: true
)

latte = Product.create!(
    item: "latte",
    description: "2 oz espresso, 8 oz steamed milk",
    image: "https://i.imgur.com/SnPLnAl.png",
    price: 4.00,
    active: true
)

mocha = Product.create!(
    item: "mocha",
    description: "2 oz espresso, 8oz steamed milk, 2 oz chocolate",
    image: "https://i.imgur.com/CwJbBLM.jpg",
    price: 5.00,
    active: true
)

chai = Product.create!(
    item: "chai",
    description: "2 oz espresso, 4 oz steamed chai, 4 oz steamed milk",
    image: "https://i.imgur.com/J9yMcD6.png",
    price: 5.00,
    active: true
)

drip_coffee = Product.create!(
    item: "drip coffee",
    description: "single origin seasonal coffee",
    image: "https://i.imgur.com/AC0kCZn.jpg",
    price: 2.50,
    active: true
)

iced_coffee = Product.create!(
    item: "iced coffee",
    description: "single origin japanese style drip coffee",
    image: "https://i.imgur.com/dMLvu6t.jpg",
    price: 3.00,
    active: true
)

chia_pudding = Product.create!(
    item: "chia pudding",
    description: "chia seed pudding, fresh seasonal berries, honey",
    image: "https://i.imgur.com/cSbUhfm.png",
    price: 3.00,
    active: true
)

butter_crossant = Product.create!(
    item: "butter croissant",
    description: "fresh-baked daily",
    image: "https://i.imgur.com/7IjH3Nv.jpg",
    price: 3.00,
    active: true
)

choc_croissant = Product.create!(
    item: "chocolate croissant",
    description: "local chocolate-filled butter croissant",
    image: "https://i.imgur.com/V1xDDcJ.jpg",
    price: 4.00,
    active: true
)

almond_croissant = Product.create!(
    item: "almond croissant",
    description: "marzipan-filled butter croissant, topped w/sliced almonds",
    image: "https://i.imgur.com/Uwgi0RQ.jpg",
    price: 4.00,
    active: true
)

diane = User.create!(
    email: "diane@testemail.com",
    password: "password",
    name: "Diane"
)

supriya = User.create!(
    email: "supriya@testemail.com",
    password: "password",
    name: "Supriya"
)

ninti = User.create!(
    email: "ninti@testemail.com",
    password: "password",
    name: "Ninti"
)

order1 = Order.create(
    subtotal: 4.00,
    tax: 0.25,
    tip: 1.00,
    total: 5.25,
    status: "new",
    user: diane
)

lineitem1 = OrderItem.create!(
    order: order1,
    product: almond_croissant,
    quantity: 1,
    unit_price: 4.00,
    total_price: 4.00
)
lineitem2 = OrderItem.create!(
    order: order1,
    product: chia_pudding,
    quantity: 1,
    unit_price: 4.00,
    total_price: 4.00
)

