class FavoritesController < ApplicationController
    def create
        # byebug
        ## validation currently not working to prevent duplicates
        movie = Movie.find_or_create_by(favorites_strong_params)
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

    private

    def favorites_strong_params
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
