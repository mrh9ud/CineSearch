Rails.application.routes.draw do
  resources :movie_genres
  resources :watch_lists
  resources :favorites
  resources :genres
  resources :movies
  resources :users
  post '/movies', to: 'movies#search'

end
