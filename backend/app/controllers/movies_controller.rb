class MoviesController < ApplicationController

    def index
        tmdb_key = ENV["TMDB_API_KEY"]

        #gets movie recommendations
        movieRecommendations = RestClient.get("https://api.themoviedb.org/3/movie/525/recommendations?api_key=#{tmdb_key}&language=en-US&page=1")
        parsedMovieRecommendations = JSON.parse(movieRecommendations.body)
        dataToRender = parsedMovieRecommendations['results'].each do |movie|
            movie['poster_path'] = "https://image.tmdb.org/t/p/w500" + movie['poster_path']
            movie['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + movie['backdrop_path']
        end
        
        render json: dataToRender.to_json(
            only: [ 'id', 'original_title', "release_date", "overview", "vote_average", "video", "poster_path", 'backdrop_path' ]
        )
    end

    def search
        tmdb_key = ENV["TMDB_API_KEY"]
        
        # SEARCHES MOVIES BY USER INPUT
        movieSearch = RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=#{tmdb_key}&language=en-US&page=1&query=#{params['searchTerm']}&include_adult=false")
        parsedMovieSearch = JSON.parse(movieSearch.body)
        dataToRender = parsedMovieSearch['results'].each do |movie|
            if movie['poster_path'] != nil
                movie['poster_path'] = "https://image.tmdb.org/t/p/w500" + movie['poster_path']
            else
                movie['poster_path'] = 'https://pics.me.me/no-memes-here-1629496.png'
            end
            if movie['backdrop_path'] != nil 
                movie['backdrop_path'] = "https://image.tmdb.org/t/p/w500" + movie['backdrop_path']
            else
                movie['backdrop_path'] = 'https://pics.me.me/no-memes-here-1629496.png'
            end
        end

        render json: dataToRender.to_json(
            only: [ 'id', 'original_title', "release_date", "overview", "vote_average", "video", "poster_path", 'backdrop_path' ]
        )
    end

    private

    def movies_strong_params
        params.require(:movie).permit(
            :searchTerm,
            :id,
            :original_title,
            :release_date,
            :overview,
            :vote_average,
            :video,
            :poster_path,
            :backdrop_path,
            :movie_id
        )
    end
end

