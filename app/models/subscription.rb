class Subscription < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :payment_date, presence: true #maybe add validation to ensure proper date is added
    validates :monthly_price, presence: true
end
