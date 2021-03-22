class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all
    render :index
  end

  def create
    @pins = Pin.create!(pin_params)
    render :show
  end

  private

  def pin_params
    params.require(:pin).permit(:lat,:lng,:course_id)
  end

end
