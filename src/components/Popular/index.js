import {Component} from 'react'
import ReactPaginate from 'react-paginate'
import MovieItem from '../MovieItem'
import Header from '../Header'

import {PopularContainer, PopularList} from './styledComponents'

class Popular extends Component {
  state = {popularMoviesList: [], currentPage: 1}

  componentDidMount() {
    this.getPopularMovieList()
  }

  getPopularMovieList = async () => {
    const {currentPage} = this.state
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&page=${currentPage}`,
    )
    const data = await response.json()

    this.setState({popularMoviesList: data})
  }

  handlePageChange = selectedObject => {
    this.setState(
      {currentPage: selectedObject.selected},
      this.getPopularMovieList,
    )
  }

  render() {
    const {popularMoviesList} = this.state

    console.log(popularMoviesList.results)
    return (
      <>
        <Header />
        <PopularContainer>
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
          <ReactPaginate
            pageCount={popularMoviesList.total_pages}
            pageRange={10}
            marginPagesDisplayed={2}
            onPageChange={this.handlePageChange}
            containerClassName="container"
            previousLinkClassName="page"
            breakClassName="page"
            nextLinkClassName="page"
            pageClassName="page"
            disabledClassNae="disabled"
            activeClassName="active"
          />
        </PopularContainer>
      </>
    )
  }
}
export default Popular
