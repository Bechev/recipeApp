Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do 

        mount_devise_token_auth_for 'User', at: 'auth'

        post '/search' => "recipes#search"
        get '/mealplan' => "mealplans#userLastMealplan"
        get '/suggestions' => "recipes#suggestions"
        resources :mealplans, only: [:index, :show, :update, :create]
        resources :days, only: [:index]
        resources :meals, only: [:index, :update]
        resources :recipes, param: :slug, only: [:index, :show]
        resources :groceries_list, only: [:create]
        resources :ingredients, only: [:index, :update, :destroy]
        resources :categories, only: [:index]
        resources :parameters, only: [:index, :update]
        resources :quantities_multiplicator, only: [:update]
    
    end 
end



end
