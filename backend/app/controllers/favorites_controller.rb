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

        currentUser = User.find_by(id: params[:user_id])
        if !currentUser.favorites.include?(movie.id)
            favorite = Favorite.create(movie_id: movie.id, user_id: params[:user_id])
            render json: favorite.to_json(
                only: [ :id, :user_id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at] }
                    ]
            )
        else
            render :json => { :errors => currentUser.errors.full_messages }, :status => 422
        end
    end
end
