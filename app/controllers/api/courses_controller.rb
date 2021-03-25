class Api::CoursesController < ApplicationController
  
  def create
    @course = Course.new(course_params)
    
    if @course.save
      render :show
    else
      render json: @course.errors.full_messages, status: 401
    end
  end

  private

  def course_params 
    params.require(:course).permit(:id, :course_name, :player_id, :distance, :time, :pins_object, :created_at)
  end

end
