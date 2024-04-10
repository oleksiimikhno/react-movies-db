import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

export function MovieCard({ id, title, popularity, overview, image = '/movie-thumb.jpg' }: MovieCardProps) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="div" image={image} sx={{ pt: "56.26%"}} />
      <CardContent sx={{ flexGrow: 1}}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">{overview}</Typography>
        <Typography variant="button" display="block" mt={2}>{popularity}</Typography>
      </CardContent>
      <CardActions>
          <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
            Details
          </Button>
        </CardActions>
    </Card>
  );
}
