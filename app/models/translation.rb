class Translation < ActiveRecord::Base
  belongs_to :contributor
  belongs_to :phrase

  def rumoji
    @rumoji ||= Rumoji.decode(text)
  end
end
