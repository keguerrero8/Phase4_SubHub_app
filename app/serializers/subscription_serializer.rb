class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :payment_date, :monthly_price, :user_id
end
