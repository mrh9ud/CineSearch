class WatchListsController < ApplicationController
    def create
        byebug
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
        
        if WatchList.find_by(movie_id: movie.id, user_id: params[:user_id])
            render json: {
                error: {
                    message: "This film is already on your Watch List!"
                }
            }
        else
            watch_list = WatchList.create(movie_id: movie.id, user_id: params[:user_id])
            render json: watch_list.to_json(
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
        watch_list = WatchList.find(params[:id])
        watch_list.destroy
        render json: { id: params[:id] }
    end
end

