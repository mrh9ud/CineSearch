class WatchListsController < ApplicationController
    def create
        movie = Movie.find_or_create_by(watch_list_strong_params) 
        watch_list = WatchList.create(movie_id: movie.id, user_id: params[:user_id])
        render json: watch_list.to_json(
            only: [ :id, :watched ],
            include: [
                user: {
                    only: [ :id, :username, :name]
                },
                movie: {
                    except: [ :created_at, :updated_at ]
                }
            ]
        )

    end

    private

    def watch_list_strong_params
        params.require(:movie).permit(
            :original_title,
            :release_date,
            :overview,
            :vote_average,
            :video,
            :poster_path,
            :backdrop_path,
        )
    end
end

