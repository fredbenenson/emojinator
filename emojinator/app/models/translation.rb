class Translation < ActiveRecord::Base
  belongs_to :contributor
  belongs_to :phrase
end
