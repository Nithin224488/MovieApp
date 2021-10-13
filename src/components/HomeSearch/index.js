import {Component} from 'react'
import ReactPaginate from 'react-paginate'
import Loader from 'react-loader-spinner'
import {
  SearchContainer,
  SearchList,
  LoaderSpinnerContainer,
  FailureContainer,
  FailureImage,
  FailureText,
} from './styledComponents'
import SearchContext from '../../context/SearchContext'
import MovieItem from '../MovieItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeSearch extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {
            searchInput,
            searchList,
            setCurrentPage,
            pageCount,
            apiStatus,
          } = value
          const handlePageChange = selectedObject => {
            setCurrentPage(selectedObject.selected)
          }

          const renderLoadingView = () => (
            <LoaderSpinnerContainer>
              <Loader type="TailSpin" color="#D81F26" height="80" width="80" />
            </LoaderSpinnerContainer>
          )

          const renderFailureView = () => (
            <FailureContainer>
              <FailureImage
                src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1634110259/Group_7394_pjusdt.png"
                alt="failure"
              />
              <FailureText>
                Your search for {searchInput} did not find any matches.
              </FailureText>
            </FailureContainer>
          )

          const renderSearchedFilms = () => (
            <>
              <SearchList>
                {searchList.map(movie => (
                  <MovieItem
                    key={movie.id}
                    urlPath={movie.poster_path}
                    id={movie.id}
                  />
                ))}
              </SearchList>
              <ReactPaginate
                pageCount={pageCount}
                pageRange={10}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="container"
                previousLinkClassName="page"
                breakClassName="page"
                nextLinkClassName="page"
                pageClassName="page"
                disabledClassNae="disabled"
                activeClassName="active"
              />
            </>
          )

          const renderAllSearchedFilms = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderSearchedFilms()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              case apiStatusConstants.failure:
                return renderFailureView()
              default:
                return null
            }
          }
          return <SearchContainer>{renderAllSearchedFilms()}</SearchContainer>
        }}
      </SearchContext.Consumer>
    )
  }
}
export default HomeSearch
