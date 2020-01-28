class Movie < ApplicationRecord
    has_many :favorites
    has_many :watch_lists
    has_many :users, through: :favorites
    has_many :users, through: :watch_lists
    has_many :movie_genres
    has_many :genres, through: :movie_genres
end
