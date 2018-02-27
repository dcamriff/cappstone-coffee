class Api::OrderItemsController < ApplicationController
    # before_action :set_order_item, only: [:show, :update, :destroy]
    
    def index
        puts params
        @order_items = Product.find(params[:product_id]).order_items.order(created_at: :desc)
        render json: @order_items
    end

    def create
        @order_item = Order_Item.create(order_item_params)
        render json: @order_item
    end

    def show
        @order_item = Order_Item.find(params[:id])
        render json: @order_item
    end

    def update
        @order_item = Order_Item.find(params[:id])
        @order_item.update!(order_item_params)
        render json: @order_item
    end

    def destroy
        @order_item = Order_Item.find(params[:id])
        render status: :ok
    end

    private
    def order_item_params
        params.require(:order_item).permit(:quantity)
    end

end
