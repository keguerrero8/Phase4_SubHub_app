class SubscriptionsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.subscriptions
        else
            render json: {errors: ["No user logged in"]}, status: 401
        end
        # render json: Subscription.all
    end

    def update
        subscription = Subscription.find_by(id: params[:id])
        subscription.update!(subscription_params)
        render json: subscription
    end

    def create
        #Kevin updated post logic below
        user = User.find_by(id: session[:user_id])
        if user
            subscription = user.subscriptions.create!(subscription_params)
            render json: subscription, status: :created
        else
            render json: {errors: ["No user logged in"]}, status: 401
        end
        # subscription = Subscription.create!(subscription_params)
        # render json: subscription, status: :created
    end

    private

    def subscription_params
        params.permit(:name, :monthly_price, :payment_date, :image_url, :user_id)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
