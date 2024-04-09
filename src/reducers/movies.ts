import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

interface MovieState {
  top: Movie[]
}

const initialState: MovieState = {
  top: [
    { id: 1, title: "The Godfather", popularity: 9.2, overview: "1972... years after Michael ...", },
    { id: 2, title: "The Godfather: Part II", popularity: 8.7, overview: "The early life and ..." },
    { id: 3, title: "The Dark Knight", popularity: 9.0, overview: "When the menace ...", },
    { id: 4, title: "12 Angry Men", popularity: 8.9, overview: "A jury holdout " },
  ]
}

export const moviesLoaded = (movies: Movie[]) => ({
  type: 'movies/loaded',
  payload: movies,
})

interface ActionWithPayload<T> extends Action {
  payload: T
}

const moviesReducer: Reducer<MovieState, ActionWithPayload<Movie[]>> = (state, action) => {
  const currentState = state ?? initialState;

  switch (action.type) {
    case 'movies/loaded':
      return {
        ...currentState,
        top: action.payload
      }
    default:
      return currentState;
  }

  return initialState;
}

export default moviesReducer;