class GenresController < ApplicationController
    def index
        genres = Genre.all
        render json: genres.to_json(
            except: [ :updated_at, :created_at ],
            include: [
                movie_genres: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at] }
                    ]
                }
            ]
        )
    end
end
