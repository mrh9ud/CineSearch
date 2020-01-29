class MoviesController < ApplicationController

    def index
        tmdb_key = ENV["TMDB_API_KEY"]

        #gets movie recommendations
        movieRecommendations = RestClient.get("https://api.themoviedb.org/3/movie/525/recommendations?api_key=#{tmdb_key}&language=en-US&page=1")
        parsedMovieRecommendations = JSON.parse(movieRecommendations.body)
        render json: parsedMovieRecommendations['results'].to_json(
            only: [ 'id', 'original_title', "release_date", "overview", "vote_average", "video", "poster_path", 'backdrop_path' ]
        )
    end

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