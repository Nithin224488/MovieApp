import {BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs'
import {PaginationContainer, Page} from './styledComponents'
import './index.css'

const Pagination = props => {
  const {totalPages, handlePageChange, currentPage} = props
  const onClickPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const onClickNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  return (
    <PaginationContainer>
      <BsArrowLeftSquare
        className="pagination-arrow"
        onClick={onClickPreviousPage}
      />
      <Page>
        {currentPage} of {totalPages}
      </Page>
      <BsArrowRightSquare
        className="pagination-arrow"
        onClick={onClickNextPage}
      />
    </PaginationContainer>
  )
}
export default Pagination
