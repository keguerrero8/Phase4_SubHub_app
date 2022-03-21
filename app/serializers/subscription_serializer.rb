class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :payment_date, :monthly_price, :isRecurring, :user_id
end
