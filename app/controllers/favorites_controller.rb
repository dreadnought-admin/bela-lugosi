class FavoritesController < ApplicationController
    skip_before_action :authorized_user

  # GET
  def index
    if params[:user_id]
      favorited_books = User.find(params[:user_id]).favorited_books
      render json: favorited_books
    else
      favorites = Favorite.all
      render json: favorites
    end
  end

  # GET
  def show
    render json: @favorite
  end

  # POST
  def create

    favorite = Favorite.new(favorite_params)

    if favorite.save
      book = favorite.book
      render json: book, status: :created
    else
      render json: favorite.errors, status: :unprocessable_entity
    end
  end

  #PATCH

  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:user_id, :book_id)
    end

end
