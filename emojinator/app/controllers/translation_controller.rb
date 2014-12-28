class TranslationController < ApplicationController

  def new
    @contributor = Contributor.new
    @phrase = Phrase.last
    @translation = Translation.new(contributor: @contributor, phrase: @phrase)
  end

end
