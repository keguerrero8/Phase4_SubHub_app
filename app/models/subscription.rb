class Subscription < ApplicationRecord
    belongs_to :user
    validates :name, presence: true, uniqueness: {scope: :user_id}
    validates :payment_date, presence: true, format: {with: /\d{2}\/\d{2}\/\d{4}/, message: "not in correct format"}
end
