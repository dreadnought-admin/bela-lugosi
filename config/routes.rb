Rails.application.routes.draw do

  get 'sessions/create'
  get 'sessions/destroy'

  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :books
  resources :poems
  resources :comments

  resources :users, only: [:index, :show, :create] do
    resources :favorites
  end 

  post "/login", to: "sessions#create"
  get "/authorized_user", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get '/items/:category_key/:value', to: 'poems#index'
  post '/signup', to: 'users#create'
  get '/user_favorites/:id', to: 'poems#user_poems'



  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end