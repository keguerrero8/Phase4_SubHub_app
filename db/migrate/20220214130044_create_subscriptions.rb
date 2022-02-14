class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.string :name
      t.string :image_url
      t.string :payment_date
      t.integer :monthly_price
      t.integer :user_id

      t.timestamps
    end
  end
end
