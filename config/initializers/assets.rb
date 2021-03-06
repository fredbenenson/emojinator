# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# "By default Rails 4 will not serve your assets."
Rails.application.config.serve_static_assets = true

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( jquery.emojiarea.js )
Rails.application.config.assets.precompile += %w( emojis.js )
# Rails.application.config.assets.precompile += %w( fontello.css )
Rails.application.config.assets.precompile += %w( emoji.css )
