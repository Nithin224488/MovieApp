import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Pagination from '../Pagination'
import MovieItem from '../MovieItem'
import Header from '../Header'

import {
  PopularContainer,
  PopularList,
  LoaderSpinnerContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Popular extends Component {
  state = {
    popularMoviesList: [],
    currentPage: 1,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getPopularMovieList()
  }

  getPopularMovieList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {currentPage} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&page=${currentPage}`,
    )
    const data = await response.json()

    this.setState({
      popularMoviesList: data,
      apiStatus: apiStatusConstants.success,
    })
  }

  handlePageChange = currentPage => {
    this.setState({currentPage}, this.getPopularMovieList)
  }

  renderLoadingView = () => (
    <LoaderSpinnerContainer>
      <Loader type="TailSpin" color="#D81F26" height="80" width="80" />
    </LoaderSpinnerContainer>
  )

  renderPopularFilms = () => {
    const {popularMoviesList, currentPage} = this.state

    return (
      <>
        <PopularList>
          {popularMoviesList.results &&
            popularMoviesList.results.map(popularMovie => (
              <MovieItem
                key={popularMovie.id}
                urlPath={
                  popularMovie?.poster_path || popularMovie?.backdrop_path
                }
                id={popularMovie.id}
              />
            ))}
        </PopularList>
        <Pagination
          handlePageChange={this.handlePageChange}
          totalPages={popularMoviesList.total_pages}
          currentPage={currentPage}
        />
      </>
    )
  }

  renderAllPopularFilms = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPopularFilms()
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
        <PopularContainer>{this.renderAllPopularFilms()}</PopularContainer>
      </>
    )
  }
}
export default Popular
