class CreateMovieWatches < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_watches do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
