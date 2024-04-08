import { Link } from "react-router-dom";
import './MovieCart.scss'

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

export function MovieCard({ id, title, popularity, overview }: MovieCardProps) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>{title}</Link>
      <div>{popularity}</div>
      <div>{overview}</div>
    </div>
  );
}
