Rails.application.routes.draw do
  namespace :api do
    get 'users/retrieve/:email', :to => 'users#retrieve'
    resources :users do
      resources :orders
    end
      resources :order_status do
        resources :orders
      end
      resources :orders do
        resources :order_items
      end
      resources :products do
        resources :order_items
      end
    end
end
