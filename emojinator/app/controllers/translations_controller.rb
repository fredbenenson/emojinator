class TranslationsController < ApplicationController

  def index
    @translation = Translation.new
    @phrase = Phrase.sample(1)
  end

  def create
    @phrase = Phrase.find(params[:phrase_id])
    @contributor = Contributor.where(email: params[:email]).first_or_create
    @translation = Translation.new(
      contributor: @contributor,
      phrase: @phrase,
      text: params[:emoji],
      language_code: @phrase.language_code,
      additional_notes: params[:additional_notes]
    )
    cookies[:contributor_email] = @contributor.email
    @contributor.save
    @translation.save
  end

end
