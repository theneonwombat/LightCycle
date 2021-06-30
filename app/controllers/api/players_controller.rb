require 'open-uri'

class Api::PlayersController < ApplicationController

  def index
    @players = Player.all
  end

  def show
    @player = Player.find(params[:id])
  end

  def create
    @player = Player.new(player_params)
    if @player.save

      default_avatar = URI.open('https://light-cycle-avatars.s3.amazonaws.com/wombat_full.jpg')
      @player.avatar.attach(io: default_avatar, filename: 'wombat_full.jpg')
      
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