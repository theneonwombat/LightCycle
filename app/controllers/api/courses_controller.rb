class Api::CoursesController < ApplicationController
  
  def index
    @courses = Course.includes(:player).all
  end

  def show
    @course = Course.find(params[:id])
  end

  def create
    @course = Course.new(course_params)
    
    if @course.save
      render :show
    else
      render json: @course.errors.full_messages, status: 401
    end
  end

  def update
    @course = Course.find(params[:id])

    if @course.update(course_params)
      render :show
    else
      render json: @course.errors.full_messages, status: 422
    end
  end

  def destroy
    @course = Course.find(params[:id])

    if @course.destroy
      render :show
    else
      render json: @course.errors.full_messages, status: 422
    end
  end

  private

  def course_params 
    params.require(:course).permit(:id, :course_name, :player_id, :distance, :time, :pins_object, :created_at, :description, :travel_mode, :static_map)
  end

end
