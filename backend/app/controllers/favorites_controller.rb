class FavoritesController < ApplicationController
    def create
        ## validation currently not working to prevent duplicates
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

        if Favorite.find_by(movie_id: movie.id, user_id: params[:user_id])
            render json: { 
                error: { 
                    message: "You've already favorited this film!" 
                    } 
                }
        else
            favorite = Favorite.create(movie_id: movie.id, user_id: params[:user_id])
            render json: favorite.to_json(
                only: [ :id, :user_id ],
                include: [
                    movie: { 
                        except: [ :created_at, :updated_at ] 
                    }
                ]
            )
        end
        
    end

    def destroy
        favorite = Favorite.find(params[:id])
        deleted_movie_favorite_id = favorite.id
        favorite.destroy
        render json: { id: deleted_movie_favorite_id }
    end
end