class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies.to_json(
            except: [ :updated_at, :created_at ],
            include: [
                favorites: {
                    only: [ :id ],
                    include: [
                        user: { except: [ :created_at, :updated_at] }
                    ]
                },
                watch_lists: {
                    only: [ :id, :watched ],
                    include: [
                        user: { except: [ :created_at, :updated_at ] }
                    ]
                },
                movie_genres: {
                    only: [ :id ],
                    include: [
                        genre: { except: [ :created_at, :updated_at ] }
                    ]
                }
            ]
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