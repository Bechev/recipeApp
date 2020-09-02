module Api
    module V1
        class CategoriesController < ApplicationController
            def index
                
                if params[:name] != nil
                    filters = params[:name].split(',')
                    @categoriesRecipes = []
                    for filter in filters
                        @categoriesRecipes = @categoriesRecipes.concat(Category.where(name: filter).first.recipes)
                    end
                else
                    @categoriesRecipes = Category.all
                end
                print('//////////////////////////')
                print(@categoriesRecipes.count())
                render json: @categoriesRecipes
            end

        end
    end
end

