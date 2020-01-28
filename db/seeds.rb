tmdb_key = ENV["TMDB_API_KEY"]

#GETS LIST OF GENRES
def getGenreList
    tmdb_key = ENV["TMDB_API_KEY"]
    genreList = RestClient.get("https://api.themoviedb.org/3/genre/movie/list?api_key=#{tmdb_key}&language=en-US")
    parsedGenreList = JSON.parse(genreList.body)
    p parsedGenreList['genres']
end

# SEARCHES MOVIES BY USER INPUT
def movieSearch
    tmdb_key = ENV["TMDB_API_KEY"]
    movieSearch = RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=#{tmdb_key}&language=en-US&page=1&query=joker&include_adult=false")
    parsedMovieSearch = JSON.parse(movieSearch.body)
    parsedMovieSearch['results'].each do |movie|
        p movie['id'], movie['original_title'], movie['release_date'], movie['genre_ids'], movie['overview'], movie['vote_average'], movie['video'], movie['poster_path'], movie['backdrop_path'], 'NEXT MOVIE'
    end
end

#MOVIE RECOMMENDATIONS INFO
def getMovieRecommendations
    tmdb_key = ENV["TMDB_API_KEY"]
    movieRecommendations = RestClient.get("https://api.themoviedb.org/3/movie/525/recommendations?api_key=#{tmdb_key}&language=en-US&page=1")
    parsedMovieRecommendations = JSON.parse(movieRecommendations.body)
    parsedMovieRecommendations['results'].each do |movie|
        p movie['genre_ids'], movie['original_title'], movie['overview'], movie['release_date']
    end
end

movieSearch()
# getGenreList()
# getMovieRecommendations()