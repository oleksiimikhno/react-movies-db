import { client } from "../api/tmdb";
import { ActionWithPayload, createReducer } from "../redux/utils";
import { AppThunk } from "../store";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

interface MovieState {
  top: Movie[],
  loading: boolean;
}

const initialState: MovieState = {
  top: [],
  loading: false
}

const moviesLoaded = (movies: Movie[]) => ({
  type: 'movies/loaded',
  payload: movies,
})

const moviesLoading = () => ({
  type: 'movies/loading'
})

export function fetchMovies(): AppThunk<Promise<void>> {
  return async (dispatch, getState) => {
    dispatch(moviesLoading());

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
}

const moviesReducer = createReducer<MovieState>(initialState, {
  'movies/loaded': (state, action: ActionWithPayload<Movie[]>) => {
    return {
      ...state,
      top: action.payload,
      loading: false
    }
  },
  'movies/loading': (state, action) => {
    return {
      ...state,
      top: action.payload,
      loading: true
    }
  }
});

export default moviesReducer;