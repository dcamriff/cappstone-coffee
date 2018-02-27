class Api::OrdersController < ApplicationController

# Sorced def order from blog post
    def order
        @order = Order.find(session[:order_id])
        rescue ActiveRecord::RecordNotFound
            @order = Order.create
            session[:order_ird] = @order.id
    end

    def index
        @orders = Order.all
        render json: @orders
    end

    def create
        @order = Order.create(product_params)
        render json: @order
    end

    def show
        @order = Order.find(params[:id])
        @products = @order.products
        @order_items = @order.order_items
        @data = {products: @products, order: @order, order_items: @order_items}
        render json: @order
    end

    def update
        @order = Order.find(params[:id])
        @order.update!(product_params)
        render json: @order
    end

    def destroy
        @order = Order.find(params[:id])
        render status: :ok
    end

    private
    def product_params
        params.require(:order).permit(:item, :description, :image, :price, :active)
    end
end
