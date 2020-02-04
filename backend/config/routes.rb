Rails.application.routes.draw do
  resources :movie_genres
  resources :watch_lists, only: [:create, :update]
  resources :favorites
  resources :genres
  resources :movies, only: [:show, :index]
  resources :users, only: [:create, :index]
  post '/search', to: 'movies#search'
  post '/login', to: 'users#login'

end
