class Post < ApplicationRecord
  has_rich_text :content
  validates_presence_of :title, :content
end
