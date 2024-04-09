import { Link } from "react-router-dom";
import styles from './MovieCart.module.scss'

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
}

export function MovieCard({ id, title, popularity, overview, image = '/movie-thumb.jpg' }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.thumb} src={image} alt="movie thumb" />
      <div className={styles.content}>
        <Link to={`/movies/${id}`}>{title}</Link>
        <div>{popularity}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
}
