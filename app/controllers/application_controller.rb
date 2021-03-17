class ApplicationController < ActionController::Base

  def login!(player)
    session[:session_token] = player.reset_session_token!
  end

  def logout!
    current_player.reset_session_token!
    session[:session_token] = nil
    @current_player = nil
  end

  def logged_in?
    !!current_player
  end

  def current_player
    @current_player ||= player.find_by(session_token: session[:session_token])
  end

end