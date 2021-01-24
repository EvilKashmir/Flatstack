class Task < ApplicationRecord
  validates :title, presence: true,
                    length: { minimum: 2 }
  scope :actual, -> { where('created_at > :date_of_create', date_of_create: Date.today - 1.month) }
end
