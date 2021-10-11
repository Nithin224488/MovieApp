import React from 'react'

const SearchContext = React.createContext({
  searchInput: '',
  searchList: [],
  updateSearchInput: () => {},
  setCurrentPage: () => {},
  pageCount: 10,
})

export default SearchContext
