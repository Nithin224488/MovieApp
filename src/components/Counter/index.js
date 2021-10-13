import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter

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
