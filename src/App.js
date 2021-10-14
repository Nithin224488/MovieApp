import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Popular from './components/Popular'
import SearchContext from './context/SearchContext'
import Account from './components/Account'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {
    searchInput: 'a',
    searchList: [],
    currentPage: 1,
    totalPages: 10,
    apiStatus: apiStatusConstants.initial,
  }

  getSearchList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    let {searchInput} = this.state
    const {currentPage} = this.state
    if (searchInput === '') {
      searchInput = 'a'
    }
    const url = `https://api.themoviedb.org/3/search/movie?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&query=${searchInput}&page=${currentPage}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    if (data.results.length !== 0) {
      this.setState({
        searchList: data.results,
        totalPages: data.total_pages,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateSearchInput = value => {
    this.setState({searchInput: value}, this.getSearchList)
  }

  setCurrentPage = pageNo => {
    this.setState({currentPage: pageNo}, this.getSearchList)
  }

  search = () => {
    this.getSearchList()
  }

  render() {
    const {
      searchInput,
      searchList,
      currentPage,
      totalPages,
      apiStatus,
    } = this.state
    return (
      <BrowserRouter>
        <SearchContext.Provider
          value={{
            searchInput,
            searchList,
            updateSearchInput: this.updateSearchInput,
            setCurrentPage: this.setCurrentPage,
            currentPage,
            totalPages,
            apiStatus,
            search: this.search,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/movies/:id" component={MovieDetails} />
            <ProtectedRoute exact path="/popular" component={Popular} />
            <ProtectedRoute exact path="/account" component={Account} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </SearchContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
