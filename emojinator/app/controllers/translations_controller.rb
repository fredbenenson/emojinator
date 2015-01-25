class TranslationsController < ApplicationController

  def index
    @translation = Translation.new
    if contributor = Contributor.where(email: cookies[:contributor_email]).first
        already_translated = Phrase.joins(:translations).where('contributor_id = ?', contributor.id).all
        phrases = Phrase.all - already_translated
        logger.debug phrases
        @phrase = phrases.sample(1).first
        if not @phrase
            redirect_to :thanks
        end
    else
        @phrase = Phrase.all.sample(1).first
    end
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
    redirect_to :translations
  end

end
