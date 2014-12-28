require 'csv'
namespace :data do
  desc "Import Phrases"
    task :import_phrases => :environment do
      puts "Dumping Phrases table!"
      Phrase.destroy_all
      CSV.foreach("#{Rails.root}/public/phrases.csv", headers: true) do |phrase|
        p = Phrase.new(original_text: phrase['original_text'], language_code: 'en')
        puts p.inspect
        p.save
      end
    end
end
