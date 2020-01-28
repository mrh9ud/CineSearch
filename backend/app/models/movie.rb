class Movie < ApplicationRecord
    has_many :favorites
    has_many :watch_lists
    has_many :users, through: :favorites
    has_many :users, through: :watch_lists
    has_many :movie_genres
    has_many :genres, through: :movie_genres

    def search
    # SEARCHES MOVIES BY USER INPUT
    # def movieSearch
    #     tmdb_key = ENV["TMDB_API_KEY"]
    #     movieSearch = RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=#{tmdb_key}&language=en-US&page=1&query=joker&include_adult=false")
    #     parsedMovieSearch = JSON.parse(movieSearch.body)
    #     parsedMovieSearch['results'].each do |movie|
    #         p movie['id'], movie['original_title'], movie['release_date'], movie['genre_ids'], movie['overview'], movie['vote_average'], movie['video'], movie['poster_path'], movie['backdrop_path'], 'NEXT MOVIE'
    #     end
    # end
    end


end
