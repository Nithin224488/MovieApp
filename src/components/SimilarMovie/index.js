import {Link} from 'react-router-dom'
import {Movie} from './styledComponents'

const SimilarMovie = props => {
  const {movieImage, id} = props
  return (
    <Link to={`/movies/${id}`}>
      <Movie src={movieImage} alt="poster" width="100%" height="100%" />
    </Link>
  )
}
export default SimilarMovie
