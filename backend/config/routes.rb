Rails.application.routes.draw do
  resources :movie_watches, only: [ :create, :destroy ]
  resources :movie_genres
  resources :watch_lists, only: [:create, :update, :destroy]
  resources :favorites, only: [:create, :update, :destroy]
  resources :genres
  resources :movies, only: [:show, :index, :destroy]
  resources :users, only: [:create, :index]
  post '/search', to: 'movies#search'
  post '/login', to: 'users#login'
  get '/trailer', to: 'movies#random_trailer'

end
