10.times do
  Post.create!(title: Faker::Food.ethnic_category, content: Faker::Lorem.paragraphs.join('<br />'))
end
