import {Component} from 'react'
import Header from '../Header'
import {
  MovieDetailsContainer,
  MovieBanner,
  MovieDetailsContent,
  MovieName,
  MovieType,
  RunTime,
  CensorRating,
  Year,
  MovieDescription,
  PlayButton,
  FadeBottom,
} from './styledComponents'

class MovieDetails extends Component {
  state = {movieDetails: {}}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US`,
    )
    const data = await response.json()

    this.setState({movieDetails: data})
  }

  render() {
    const {movieDetails} = this.state
    const {adult, overview, tagline, runtime} = movieDetails
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${
      movieDetails?.backdrop_path || movieDetails?.poster_path
    }`
    console.log(movieDetails)

    return (
      <>
        <Header />
        <MovieDetailsContainer>
          <MovieBanner backgroundImageUrl={backgroundImageUrl}>
            <MovieDetailsContent>
              <MovieName>
                {movieDetails?.title ||
                  movieDetails?.name ||
                  movieDetails?.original_name}
              </MovieName>
              <MovieType>
                <RunTime>{runtime !== 0 && runtime}</RunTime>
                <CensorRating>{adult ? 'A' : 'U'}</CensorRating>
                <Year>{movieDetails.release_date}</Year>
              </MovieType>
              <MovieDescription>{overview || tagline}</MovieDescription>
              <PlayButton>Play</PlayButton>
            </MovieDetailsContent>
            <FadeBottom>{null}</FadeBottom>
          </MovieBanner>
        </MovieDetailsContainer>
      </>
    )
  }
}
export default MovieDetails
