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
            only: [ :id, :watched ],
            include: [
                movie: {
                    except: [ :created_at, :updated_at ]
                }
            ]
        )
    end

    def watch_movie
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
        watch_list = WatchList.find_or_create_by(
                movie_id: movie.id,
                user_id: params[:user_id],
        ) 
        updated_watch_list = watch_list.update(watched: true)
        updated_watch_list.save

        render json: updated_watch_list.to_json(
            only: [ :watched ],
            include: [
                user: {
                    only: [ :id, :username, :name ]
                },
                movie: {
                    except: [ :created_at, :updated_at ]
                }
            ]
        )
    end
end

