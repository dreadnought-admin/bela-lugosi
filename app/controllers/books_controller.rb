class BooksController < ApplicationController
    skip_before_action :authorized_user
    wrap_parameters format: []

    def index
        render json: Book.all
    end 

    def show
        render json: find_book, serializer: BookWithUsersSerializer
    end 

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    end 
    
    def update
        book = find_book
        if book.update(book_params)
            render json: book
        else 
            render json: book.errors, status: :unprocessable_entity
        end 
    end 

    def destroy
        book = find_book
        book.destroy
        head :no_content
    end 

    private

    def find_book
        book = Book.find(params[:id])
    end 

    def book_params
        params.permit(:user_id, :title, :author, :year_published, :genre, :cover_img, :summary)
    end


end
