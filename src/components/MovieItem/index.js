import {Link} from 'react-router-dom'
import {MovieCardItem, MovieImage} from './styledComponents'

const MovieItem = props => {
  const {id, urlPath} = props
  const movieImage = `https://image.tmdb.org/t/p/original/${urlPath}`
  return (
    <MovieCardItem>
      <Link to={`/movies/${id}`}>
        <MovieImage src={movieImage} alt="movie" />
      </Link>
    </MovieCardItem>
  )
}
export default MovieItem
