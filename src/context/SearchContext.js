import React from 'react'

const SearchContext = React.createContext({
  searchInput: 'a',
  searchList: [],
  updateSearchInput: () => {},
  setCurrentPage: () => {},
  currentPage: 1,
  totalPages: 10,
  apiStatus: null,
  search: () => {},
})

export default SearchContext
