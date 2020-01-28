Rails.application.routes.draw do
  resources :movie_genres
  resources :watch_lists
  resources :favorites
  resources :genres
  resources :movies
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
