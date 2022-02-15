class SubscriptionsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        subscriptions = Subscription.all
        render json: subscriptions
    end

    def update
        subscription = Subscription.find_by(id: params[:id])
        subscription.update!(subscription_params)
        render json: subscription
    end

    def create
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end

    private

    def subscription_params
        params.permit(:name, :monthly_price, :payment_date, :image_url, :user_id)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
