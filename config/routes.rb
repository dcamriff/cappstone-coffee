Rails.application.routes.draw do
  namespace :api do
    get 'users/retrieve/:email', to: 'users#retrieve'
    resources :users
    resources :orders
    resources :products
    end
end

# /users/2
# /orders/1
# /products/2
# 
# user#show
# render json: {user: @user, orders: @orders}
