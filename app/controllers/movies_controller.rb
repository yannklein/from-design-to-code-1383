class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    if params[:query].present?
      @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%")
    end

    # by default: renders the view under the hood -> name_of_action.html.erb

    respond_to do |format|
      format.html # default behaviour, rendering the index.html.erb
      format.text { render partial: "movies/list", locals: { movies: @movies}, formats: [:html] }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)

    # redirect_to movies_path
    respond_to do |format|
      format.html { redirect_to movies_path } 
      format.text { render partial: "movies/movie_infos", locals: { movie: @movie}, formats: [:html]}
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
