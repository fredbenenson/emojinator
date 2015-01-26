class ResultsController < ApplicationController

  def index
    @phrases = Phrase.includes(:translations).order(:id).all
  end

end
