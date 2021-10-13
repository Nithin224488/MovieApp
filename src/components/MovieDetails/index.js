import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {format} from 'date-fns'
import Header from '../Header'
import SimilarMovie from '../SimilarMovie'
import {
  MovieDetailsContainer,
  MovieBanner,
  MovieDetailsContent,
  MovieName,
  MovieType,
  RunTime,
  CensorContainer,
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
  DetailItem,
  Detail,
  SimilarMoviesContainer,
  SimilarMoviesHeading,
  SimilarMoviesList,
  LoaderSpinnerContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class MovieDetails extends Component {
  state = {
    movieDetails: {},
    similarMovieList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const movieDetailsResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US`,
    )
    const movieDetailsData = await movieDetailsResponse.json()
    const formattedMovieDetailsData = {
      title: movieDetailsData.title,
      name: movieDetailsData.name,
      originalName: movieDetailsData.original_name,
      adult: movieDetailsData.adult,
      overview: movieDetailsData.overview,
      runtime: movieDetailsData.runtime,
      genres: movieDetailsData.genres,
      budget: movieDetailsData.budget,
      backdropPath: movieDetailsData.backdrop_path,
      posterPath: movieDetailsData.poster_path,
      spokenLanguages: movieDetailsData.spoken_languages,
      releaseDate: movieDetailsData.release_date,
      votingCount: movieDetailsData.voting_count,
      votingAverage: movieDetailsData.voting_average,
    }
    this.setState({movieDetails: formattedMovieDetailsData})
    const similarMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&page=1'`,
    )
    const similarMoviesData = await similarMoviesResponse.json()
    this.setState({
      similarMovieList: similarMoviesData.results,
      apiStatus: apiStatusConstants.success,
    })
  }

  spliceString = overview => {
    if (overview.length > 200) {
      return overview.slice(0, 201).concat('...')
    }
    return overview
  }

  renderLoadingView = () => (
    <LoaderSpinnerContainer>
      <Loader type="TailSpin" color="#D81F26" height="80" width="80" />
    </LoaderSpinnerContainer>
  )

  renderFilmDetails = () => {
    const {movieDetails, similarMovieList} = this.state
    const {
      title,
      name,
      originalName,
      adult,
      overview,
      runtime,
      genres,
      budget,
      backdropPath,
      posterPath,
      spokenLanguages,
      releaseDate,
      votingCount,
      votingAverage,
    } = movieDetails
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${
      backdropPath || posterPath
    }`
    const year = new Date(releaseDate).getFullYear()
    const month = new Date(releaseDate).getMonth()
    const day = new Date(releaseDate).getDate()
    let date
    if (!Number.isNaN(year)) {
      date = format(new Date(year, month, day), 'do  MMMM  yyy')
      console.log(date)
    }
    const budgetInCrores =
      budget !== 0
        ? (parseInt(budget) / 10000000).toString().concat(' Crores')
        : 0

    return (
      <MovieDetailsContainer>
        <MovieBanner backgroundImageUrl={backgroundImageUrl}>
          <MovieDetailsContent>
            <MovieName>{title || name || originalName}</MovieName>
            <MovieType>
              <RunTime>{runtime !== 0 && runtime}</RunTime>
              <CensorContainer>
                <CensorRating>{adult ? 'A' : 'UA'}</CensorRating>
              </CensorContainer>
              <Year>{year}</Year>
            </MovieType>
            <MovieDescription>
              {overview && this.spliceString(overview)}
            </MovieDescription>
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
                    <DetailItem key={genre.id}>{genre.name}</DetailItem>
                  ))}
              </DetailList>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Audio Available</DetailHeading>
              <DetailList>
                {spokenLanguages &&
                  spokenLanguages.map(language => (
                    <DetailItem key={language.english_name}>
                      {language?.english_name || language.name}
                    </DetailItem>
                  ))}
              </DetailList>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Rating Count</DetailHeading>
              <Detail>{votingCount || '0'}</Detail>
              <DetailHeading>Rating Average</DetailHeading>
              <DetailList>
                <Detail>{votingAverage || 'NA'}</Detail>
              </DetailList>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Budget</DetailHeading>
              <DetailList>
                <Detail>{budgetInCrores || 'NA'}</Detail>
              </DetailList>
              <DetailHeading>Release Date</DetailHeading>
              <DetailList>
                <Detail>{date}</Detail>
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
    )
  }

  renderAllDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderFilmDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderAllDetails()}
      </>
    )
  }
}
export default MovieDetails
