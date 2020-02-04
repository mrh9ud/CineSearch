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

# # SEARCHES MOVIES BY USER INPUT
# def movieSearch
#     tmdb_key = ENV["TMDB_API_KEY"]
#     movieSearch = RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=#{tmdb_key}&language=en-US&page=1&query=joker&include_adult=false")
#     parsedMovieSearch = JSON.parse(movieSearch.body)
#     parsedMovieSearch['results'].each do |movie|
#         p movie['id'], movie['original_title'], movie['release_date'], movie['genre_ids'], movie['overview'], movie['vote_average'], movie['video'], movie['poster_path'], movie['backdrop_path'], 'NEXT MOVIE'
#     end
# end

# #MOVIE RECOMMENDATIONS INFO
# def getMovieRecommendations
#     tmdb_key = ENV["TMDB_API_KEY"]
#     movieRecommendations = RestClient.get("https://api.themoviedb.org/3/movie/525/recommendations?api_key=#{tmdb_key}&language=en-US&page=1")
#     parsedMovieRecommendations = JSON.parse(movieRecommendations.body)
#     dataToRender = parsedMovieRecommendations['results'].each do |movie|
        
#         movie['poster_path'] = "https://image.tmdb.org/t/p/w500" + movie['poster_path']
#         #p movie #movie['id'], movie['original_title'], movie['release_date'], movie['genre_ids'], movie['overview'], movie['vote_average'], movie['video'], movie['poster_path'], movie['backdrop_path']
#     end
#     p dataToRender
# end

# movieSearch()
# getGenreList()
# getMovieRecommendations()

#TEST DATA
# batman = Movie.create(original_title: 'batman', release_date: 2008-05-23, overview: 'a description goes here', vote_average: 3, video: 'urlpath', poster_path: 'posterurl', backdrop_path: 'backdropurl')
# matt = User.create(username: 'mrh9ud', password: 'password', name: 'matt', birthday: 1995-02-14, bio: 'something about a person', img: 'profileURL', region: 'Central VA')
# action = Genre.create(name: 'action')
# matt_favorite = Favorite.create(user: matt, movie: batman)
# matt_watch_list = WatchList.create(watched: false, movie: batman, user: matt)
# movie_genre = MovieGenre.create(genre: action, movie: batman)

# superman = Movie.create(original_title: 'superman', release_date: 2008-05-23, overview: 'a description goes here', vote_average: 3, video: 'urlpath', poster_path: 'posterurl', backdrop_path: 'backdropurl')
# matt = User.create(username: 'mrh9ud', password: 'password', name: 'matt', birthday: 1995-02-14, bio: 'something about a person', img: 'profileURL', region: 'Central VA')
# action = Genre.create(name: 'action')
# matt_favorite = Favorite.create(user: matt, movie: superman)
# matt_watch_list = WatchList.create(watched: false, movie: superman, user: matt)
# movie_genre = MovieGenre.create(genre: action, movie: superman)

# spiderman = Movie.create(original_title: 'spiderman', release_date: 2008-05-23, overview: 'a description goes here', vote_average: 3, video: 'urlpath', poster_path: 'posterurl', backdrop_path: 'backdropurl')
# matt = User.create(username: 'mrh9ud', password: 'password', name: 'matt', birthday: 1995-02-14, bio: 'something about a person', img: 'profileURL', region: 'Central VA')
# action = Genre.create(name: 'action')
# matt_favorite = Favorite.create(user: matt, movie: spiderman)
# matt_watch_list = WatchList.create(watched: false, movie: spiderman, user: matt)
# movie_genre = MovieGenre.create(genre: action, movie: spiderman)

# joker = Movie.create(original_title: 'joker', release_date: 2008-05-23, overview: 'a description goes here', vote_average: 3, video: 'urlpath', poster_path: 'posterurl', backdrop_path: 'backdropurl')
# matt = User.create(username: 'mrh9ud', password: 'password', name: 'matt', birthday: 1995-02-14, bio: 'something about a person', img: 'profileURL', region: 'Central VA')
# action = Genre.create(name: 'action')
# matt_favorite = Favorite.create(user: matt, movie: joker)
# matt_watch_list = WatchList.create(watched: false, movie: joker, user: matt)
# movie_genre = MovieGenre.create(genre: action, movie: joker)