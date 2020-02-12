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
        byebug
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

    def update
        user_to_update = User.find(params[:id])
        user_to_update.update(
            username: params[:currentUserObj][:username],
            password: params[:currentUserObj][:password],
            name: params[:currentUserObj][:name],
            birthday: params[:currentUserObj][:birthday],
            bio: params[:currentUserObj][:bio],
            img: params[:currentUserObj][:img],
            region: params[:currentUserObj][:region]
        )

        render json: user_to_update.to_json(
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

    def destroy
        user_to_delete = User.find(params[:id])
        byebug
        user_to_delete.destroy
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
