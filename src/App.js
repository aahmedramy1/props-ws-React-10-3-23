import React, { useState } from 'react'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import Button from 'react-bootstrap/Button';



const App = () => {
  const handleSearchClick = (text) => {
    setMovies(movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase())));
  }


  const [movies, setMovies] = useState([
    {
      id: 2,
      title: "The Godfather",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, dolorum!",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas?",
    },
    {
      id: 4,
      title: "The Dark Knight",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, dolorum!",
    },
    {
      id: 5,
      title: "Avengers",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, dolorum!",
    },
  ])

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: "center", flexDirection: 'column' }}>
      <Filter handleFilter={handleSearchClick} />
      <MovieList movies={movies} />
      <>
      
      </>
    </div>
  )
}

export default App


for (let i = 0; i < 5; i++) {

}