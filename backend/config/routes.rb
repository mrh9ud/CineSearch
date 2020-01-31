Rails.application.routes.draw do
  resources :movie_genres
  resources :watch_lists
  resources :favorites
  resources :genres
  resources :movies, only: [:show, :index]
  resources :users
  post '/search', to: 'movies#search'

end
