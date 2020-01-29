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
                    only: [ :id, :watched ],
                    include: [
                        movie: { except: [ :created_at, :updated_at ] }
                    ]
                }
            ]
        )
    end
end
