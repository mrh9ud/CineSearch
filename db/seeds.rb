# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# def yelp
#     yelp = ENV["YELP_API_KEY"]
#     yelp_url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=#{category}&location=#{location}"
#     res = HTTParty.get(yelp_url, :headers => {"Authorization" => "Bearer #{yelp}", "x-requested-with" => "XMLHttpRequest"})
#      render plain: res.body.squish
#  end

tmdb_key = ENV["TMDB_API_KEY"]

Tmdb::Api.key(tmdb_key)

movie = Tmdb::Movie.latest

p movie