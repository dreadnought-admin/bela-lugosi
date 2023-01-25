class PoemsController < ApplicationController
    skip_before_action :authorized_user
    wrap_parameters format: []

    def index
        render json: Poem.all
    end 

    def user_poems
        user = User.find(params[:id])
        poems = Poem.where("user_id = ?"), params[:id]
        render json: poems
    end 

    def show
        render json: find_poem, serializer: PoemWithUsersSerializer
    end 

    def create
        poem = Poem.create!(poem_params)
        render json: poem, status: :created
    end 
    
    def update
        if poem.update(poem_params)
            render json: poem
        else 
            render json: poem.errors, status: :unprocessable_entity
        end 
    end 

    def destroy
        poem = find_poem
        poem.destroy
        head :no_content
    end 

    private

    def find_poem
        poem = Poem.find(params[:id])
    end 

    def poem_params
        params.permit(:user_id, :title, :author, :poem_type, :genre, :year_published, :poem_txt)
    end


end

