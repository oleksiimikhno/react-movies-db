import { fetchMovies, Movie } from "../../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { MovieCard } from "./MovieCard";

import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { Container, Grid, LinearProgress, Typography } from "@mui/material";

interface MoviesProps {
  movies: Movie[];
  loading: boolean;
}

export function Movies({ movies, loading }: MoviesProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container sx={{py: 8}} maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Now playing
      </Typography>
        {loading ? (
          <LinearProgress color="secondary" />
        ) : (
          <Grid container spacing={4}>
            {
              movies.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4}>
                  <MovieCard {...movie} />
                </Grid>
              ))
            }
          </Grid>
        )}
    </Container>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
})

const conntector = connect(mapStateToProps);

export default conntector(Movies);
