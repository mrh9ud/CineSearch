class UsersController < ApplicationController
    def index
        users = User.all
        render json: users.to_json(
            except: [ :updated_at, :created_at ],
            include: [
                favorites: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at] }
                    ]
                },
                watch_lists: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                },
                movie_watches: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                }
            ]
        )
    end

    def create
        user = User.create(
            username: params[:username], 
            password: params[:password], 
            name: params[:name], 
            bio: params[:bio],
            img: params[:img], 
            region: params[:region], 
            birthday: params[:birthday]
        )

        render json: user.to_json(
            except: [ :updated_at, :created_at ],
            include: [
                favorites: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at] }
                    ]
                },
                watch_lists: {
                    only: [ :id, :watched ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                },
                movie_watches: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                }
            ]
        )
    end

    def login
        currentUser = User.find_by(username: params[:username])

        render json: currentUser.to_json(
            except: [ :updated_at, :created_at ],
            include: [
                favorites: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at] }
                    ]
                },
                watch_lists: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                },
                movie_watches: {
                    only: [ :id ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                }
            ]
        )
    end

    private

    def user_strong_params
        params.require(:user).permit(
            :username,
            :password,
            :name,
            :bio,
            :img,
            :region,
            :birthday
        )
    end
end
