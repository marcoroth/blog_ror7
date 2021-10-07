class Post < ApplicationRecord
  has_rich_text :content
  validates_presence_of :title, :content

  after_create_commit { broadcast_prepend_to "posts" }
end
