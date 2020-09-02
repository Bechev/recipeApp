module Api
    module V1
        class CategoriesController < ApplicationController
            def index
                
                if params[:name] != nil
                    # debugger
                    filters = params[:name].split(',')
                    @filteredRecipes = []
                    if filters.length === 1
                        @filteredRecipes = Category.where(name: filters.first).first.recipes
                    else
                        for filter in filters
                            filteredRecipe = Category.where(name: filter).first.recipes
                            @filteredRecipes = @filteredRecipes.concat(filteredRecipe)
                        end
                        @filteredRecipes = @filteredRecipes.select { |e| @filteredRecipes.count(e) > 1 }
                        @filteredRecipes.uniq
                    end
                    render json: @filteredRecipes
                else
                    @categories = Category.all
                    render json: @categories
                end
            end

        end
    end
end

