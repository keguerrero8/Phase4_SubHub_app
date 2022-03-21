# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Subscription.create(name: "Hulu", image_url: "https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg", isRecurring: "true", payment_date: "02/21/2022", monthly_price: 15, user_id: 1)
Subscription.create(name: "Netflix", image_url: "https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg", isRecurring: "true", payment_date: "02/21/22", monthly_price: 10, user_id: 1)
Subscription.create(name: "HBO Max", image_url: "https://yt3.ggpht.com/TcXFMFkDeUN8pDqZ-2WShXiG6lXtpoRG2kfRMg3Nd9g947mESyRYqlWtwcoy9FyjiiLVLaTd=s900-c-k-c0x00ffffff-no-rj", isRecurring: "true", payment_date: "02/21/2022", monthly_price: 20, user_id: 1)
Subscription.create(name: "Disney+", image_url: "https://cdn.vox-cdn.com/thumbor/3S4C3WEJONntPuOn3RFxrgDQbAI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13412121/disneyplus.0.jpg", isRecurring: "true", payment_date: "02/21/2022", monthly_price: 30, user_id: 1)
Subscription.create(name: "Crunchyroll", image_url: "https://i.pcmag.com/imagery/reviews/04rTxLoXlWShegCylsD3rQ7-11..v1583958677.png", isRecurring: "true", payment_date: "02/21/2022", monthly_price: 12, user_id: 1)
Subscription.create(name: "Spotify", image_url: "https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM", isRecurring: "true", payment_date: "02/21/2022", monthly_price: 15, user_id: 1)

puts "seeded"