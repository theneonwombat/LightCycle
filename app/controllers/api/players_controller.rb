class Api::PlayersController < ApplicationController

  def create
    @player = Player.new(player_params)

    if @player.save
      login!(@player)
      render :show
    else
      render json: @player.errors.full_messages, status: 422
    end
  end

  private

  def player_params
    params.require(:player).permit(:playername, :password) #removed email
  end

end