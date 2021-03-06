class SubscriptionsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.subscriptions
        else
            render json: {errors: ["No user logged in"]}, status: 401
        end
    end

    def update
        subscription = Subscription.find_by(id: params[:id])
        subscription.update!(subscription_params)
        render json: subscription
    end

    def show
        user = User.find_by(id: session[:user_id])
        subscription = Subscription.find_by(id: params[:id])
        if user
            render json: subscription
        else
            render json: {errors: ["No user logged in"]}, status: 401
        end
    end 

    def create
        user = User.find_by(id: session[:user_id])
        if user
            subscription = user.subscriptions.create!(subscription_params)
            render json: subscription, status: :created
        else
            render json: {errors: ["No user logged in"]}, status: 401
        end
    end

    def destroy
        subscription = Subscription.find(params[:id])
        subscription.destroy
        head :no_content
    end
    
    private

    def subscription_params
        params.permit(:name, :monthly_price, :payment_date, :image_url, :user_id, :isRecurring)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
