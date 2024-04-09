import { Movie } from "../../reducers/movies";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";

import './Movies.scss';
import { useEffect } from "react";
import { client } from "../../api/tmdb";
import { moviesLoaded } from '../../reducers/movies';

interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDate() {
      const config = await client.getConfiguration();
      const imageUrl = config.images.base_url;
      const results = await client.getNowPlayingMovies(); 

      const mappedResults: Movie[] = results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        popularity: movie.popularity,
        overview: movie.overview,
        image: (movie.backdrop_path) ? `${imageUrl}w780${movie.backdrop_path}`: undefined,
      }));

      dispatch(moviesLoaded(mappedResults));
    }

    loadDate();
  }, [dispatch]);

  return (
    <section>
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie}/>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
})

const conntector = connect(mapStateToProps);

export default conntector(Movies);
