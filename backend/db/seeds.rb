MovieGenre.destroy_all
WatchList.destroy_all
Favorite.destroy_all
Movie.destroy_all
User.destroy_all
Genre.destroy_all

tmdb_key = ENV["TMDB_API_KEY"]

#GETS LIST OF GENRES
# def getGenreList
#     tmdb_key = ENV["TMDB_API_KEY"]
#     genreList = RestClient.get("https://api.themoviedb.org/3/genre/movie/list?api_key=#{tmdb_key}&language=en-US")
#     parsedGenreList = JSON.parse(genreList.body)
#     p parsedGenreList['genres']
# end

tmdb_key = ENV["TMDB_API_KEY"]
        
top_movies = RestClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=#{tmdb_key}&language=en-US&page=1")
top_movies_parsed = JSON.parse(top_movies.body)
pp top_movies_parsed