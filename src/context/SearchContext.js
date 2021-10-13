import React from 'react'

const SearchContext = React.createContext({
  searchInput: 'a',
  searchList: [],
  updateSearchInput: () => {},
  setCurrentPage: () => {},
  pageCount: 10,
  apiStatus: null,
  search: () => {},
})

export default SearchContext
