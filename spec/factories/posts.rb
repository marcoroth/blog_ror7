FactoryBot.define do
  factory :post do
    title { Faker::Movie.title }
    content { Faker::Lorem.paragraphs.join("<br />") }
  end
end
