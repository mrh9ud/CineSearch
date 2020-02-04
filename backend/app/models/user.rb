class User < ApplicationRecord
    has_many :favorites
    has_many :watch_lists
    has_many :movies, through: :favorites
    has_many :movies, through: :watch_lists
    validates :username, uniqueness: {case_sensititive: false}
end
