import {Component} from 'react'
import HomePage from '../HomePage'
import HomeSearch from '../HomeSearch'
import Header from '../Header'

class Home extends Component {
  state = {isSearch: false}

  setSearchPage = () => {
    this.setState({isSearch: true})
  }

  render() {
    const {isSearch} = this.state

    return (
      <>
        <Header setSearchPage={this.setSearchPage} />
        {isSearch ? <HomeSearch /> : <HomePage />}
      </>
    )
  }
}
export default Home
