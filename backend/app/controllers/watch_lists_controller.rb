class WatchListsController < ApplicationController
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
        watch_list = WatchList.create(movie_id: movie.id, user_id: params[:user_id])
        
        render json: watch_list.to_json(
            only: [ :id  ],
            include: [
                movie: {
                    except: [ :created_at, :updated_at ]
                }
            ]
        )
    end

    def destroy
        watch_list = WatchList.find_by(user_id: params[:user_id], movie_id: params[:movie_id])
        watch_list.destroy
    end
end

