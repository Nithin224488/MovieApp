import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Popular from './components/Popular'
import SearchContext from './context/SearchContext'
import './App.css'

class App extends Component {
  state = {searchInput: 'a', searchList: [], currentPage: '1', pageCount: 10}

  getSearchList = async () => {
    let {searchInput} = this.state
    const {currentPage} = this.state
    if (searchInput === '') {
      searchInput = 'a'
    }
    const url = `https://api.themoviedb.org/3/search/movie?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US&query=${searchInput}&page=${currentPage}`

    const response = await fetch(url)
    const data = await response.json()

    this.setState({searchList: data.results, pageCount: data.total_pages})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value}, this.getSearchList)
  }

  setCurrentPage = pageNo => {
    this.setState({currentPage: pageNo}, this.getSearchList)
  }

  render() {
    const {searchInput, searchList, pageCount} = this.state
    return (
      <BrowserRouter>
        <SearchContext.Provider
          value={{
            searchInput,
            searchList,
            updateSearchInput: this.updateSearchInput,
            setCurrentPage: this.setCurrentPage,
            pageCount,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/popular" component={Popular} />
          </Switch>
        </SearchContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
