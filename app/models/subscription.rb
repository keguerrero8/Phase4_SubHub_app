class Subscription < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :payment_date, presence: true #maybe add validation to ensure proper date is added
    validates :payment_date, format: {with: /\d{2}\/\d{2}\/\d{4}/, message: "not in correct format"}
end
