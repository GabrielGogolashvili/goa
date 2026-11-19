let movies = [
    { title: "Avatar", rating: 8.5, year: 2009, watched: true },
    { title: "Titanic", rating: 7.9, year: 1997, watched: true },
    { title: "Joker", rating: 8.4, year: 2019, watched: false },
    { title: "Inception", rating: 9.0, year: 2010, watched: true },
    { title: "Venom", rating: 6.5, year: 2021, watched: false },
    { title: "Interstellar", rating: 9.2, year: 2014, watched: false }
]

let highRateMovies = movies.filter(movie => movie.rating > 8)

movies.forEach(movie => {
    console.log(movie.title, movie.year)
})

let movieList = movies.map(movie => `${movie.title} - ${movie.rating}`)

let interstellarIndex = movies.findIndex(movie => movie.title === "Interstellar")

let UnwatchedMovie = movies.some(movie => movie.watched === false)

let GoodRatings = movies.every(movie => movie.rating > 6)