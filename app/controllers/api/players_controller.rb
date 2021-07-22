require 'open-uri'

class Api::PlayersController < ApplicationController

  def index
    @players = Player.all
  end

  def show
    @player = Player.find(params[:id])
    #@num_courses = @player.num_courses
    #@total_distance = @player.total_distance
    #@last_course = @player.last_course
  end

  def create
    @player = Player.new(player_params)
    if @player.save

      default_avatar = URI.open(
        'https://light-cycle-avatars.s3.amazonaws.com/default1.png')
      @player.avatar.attach(io: default_avatar, filename: 'default1.png')
      
      login!(@player)
      render :show
    else
      render json: @player.errors.full_messages, status: 422
    end
  end

  def update
    @player = Player.find(params[:id])

    if @player.update(player_params)
      render :show
    else
      render json: @player.errors.full_messages, status: 422
    end
  end

  private

  def player_params
    params.require(:player).permit(:playername, :password, :bio, :location, :avatar) #removed email
  end

end