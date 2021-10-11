import {Component} from 'react'
import ReactPaginate from 'react-paginate'
import {SearchContainer, SearchList} from './styledComponents'
import SearchContext from '../../context/SearchContext'
import MovieItem from '../MovieItem'

import './index.css'

class HomeSearch extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {searchList, setCurrentPage, pageCount} = value
          const handlePageChange = selectedObject => {
            setCurrentPage(selectedObject.selected)
          }
          return (
            <SearchContainer>
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
            </SearchContainer>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}
export default HomeSearch
