class MovieWatchesController < ApplicationController

    def create
        movie = Movie.find_or_create_by(
            original_title: params[:movie][:original_title],
            release_date: params[:movie][:release_date],
            overview: params[:movie][:overview],
            vote_average: params[:movie][:vote_average],
            video: params[:movie][:video],
            poster_path: params[:movie][:poster_path],
            backdrop_path: params[:movie][:backdrop_path],
            api_id: params[:movie][:id]
        )
        if MovieWatch.find_by(movie_id: movie.id, user_id: params[:user_id]) 
            render json: {
                error: {
                    message: "You've already marked this movie as watched!"
                }
            }
        else
            movie_viewing = MovieWatch.create(movie_id: movie.id, user_id: params[:user_id])
            render json: movie_viewing.to_json(
                only: [ :id ],
                include: [
                    movie: {
                        except: [ :created_at, :updated_at ]
                    }
                ]
            )
        end
    end

    def destroy
        movie_watch = MovieWatch.find(params[:id])
        movie_watch.destroy
        render json: { id: params[:id]}
    end
end
