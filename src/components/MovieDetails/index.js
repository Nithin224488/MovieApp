import {Component} from 'react'
import Header from '../Header'
import SimilarMovie from '../SimilarMovie'
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
  MovieSpecificDetails,
  MovieDetailsBottom,
  DetailContainer,
  DetailHeading,
  DetailList,
  Detail,
  SimilarMoviesContainer,
  SimilarMoviesHeading,
  SimilarMoviesList,
} from './styledComponents'

class MovieDetails extends Component {
  state = {movieDetails: {}, similarMovieList: []}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const movieDetailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US`,
    )
    const movieDetailsData = await movieDetailsResponse.json()

    this.setState({movieDetails: movieDetailsData})
    const similarMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&page=1'`,
    )
    const similarMoviesData = await similarMoviesResponse.json()
    this.setState({similarMovieList: similarMoviesData.results})
    console.log(similarMoviesData)
  }

  render() {
    const {movieDetails, similarMovieList} = this.state
    const {adult, overview, tagline, runtime, genres, budget} = movieDetails
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${
      movieDetails?.backdrop_path || movieDetails?.poster_path
    }`

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
          <MovieDetailsBottom>
            <MovieSpecificDetails>
              <DetailContainer>
                <DetailHeading>Genres</DetailHeading>
                <DetailList>
                  {genres &&
                    genres.map(genre => (
                      <Detail key={genre.id}>{genre.name}</Detail>
                    ))}
                </DetailList>
              </DetailContainer>
              <DetailContainer>
                <DetailHeading>Audio Available</DetailHeading>
                <DetailList>
                  {movieDetails.spoken_languages &&
                    movieDetails.spoken_languages.map(language => (
                      <Detail key={language.id}>
                        {language?.english_name || language.name}
                      </Detail>
                    ))}
                </DetailList>
              </DetailContainer>
              <DetailContainer>
                <DetailHeading>Rating Count</DetailHeading>
                <DetailList>
                  <Detail key="1">
                    {movieDetails.voting_count
                      ? movieDetails.voting_count
                      : '0'}
                  </Detail>
                </DetailList>
                <DetailHeading>Rating Average</DetailHeading>
                <DetailList>
                  <Detail key="1">
                    {movieDetails.voting_average
                      ? movieDetails.voting_average
                      : '0'}
                  </Detail>
                </DetailList>
              </DetailContainer>
              <DetailContainer>
                <DetailHeading>Budget</DetailHeading>
                <DetailList>
                  <Detail key="1">{budget}</Detail>
                </DetailList>
                <DetailHeading>Release Date</DetailHeading>
                <DetailList>
                  <Detail>{movieDetails.release_date}</Detail>
                </DetailList>
              </DetailContainer>
            </MovieSpecificDetails>
            <SimilarMoviesContainer>
              <SimilarMoviesHeading> More like this </SimilarMoviesHeading>
              <SimilarMoviesList>
                {similarMovieList &&
                  similarMovieList.map(movie => {
                    const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    const {id} = movie
                    return (
                      <SimilarMovie
                        key={id}
                        movieImage={movieImage}
                        id={movie.id}
                      />
                    )
                  })}
              </SimilarMoviesList>
            </SimilarMoviesContainer>
          </MovieDetailsBottom>
        </MovieDetailsContainer>
      </>
    )
  }
}
export default MovieDetails
