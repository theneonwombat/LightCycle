class Api::SessionsController < ApplicationController

  def create
    @player = Player.find_by_credentials(
      params[:player][:playername],
      params[:player][:password]
    )

    if @player
      login!(@player)
      render :show
    else
      render json: ["Invalid playername or password"], status: 401
    end
  end

  def destroy
    @player = current_player
    if @player
      logout!
      render :show
    else
      render json: ["Impossible, nobody signed in"], status: 404
    end
  end

end