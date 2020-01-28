class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :original_title
      t.datetime :release_date
      t.string :overview
      t.integer :vote_average
      t.string :video
      t.string :poster_path
      t.string :backdrop_path

      t.timestamps
    end
  end
end
