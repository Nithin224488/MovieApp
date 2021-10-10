import {Component} from 'react'

import {FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'
import {AiOutlineGoogle} from 'react-icons/ai'
import Header from '../Header'
import MovieSlider from '../MovieSlider'

import {
  HomeContainer,
  Banner,
  ContentContainer,
  BannerTitle,
  OverView,
  PlayButton,
  FadeBottom,
  MovieContainer,
  MovieListContainer,
  MovieListTitle,
  ContactContainer,
  ContactIcons,
  ContactText,
} from './styledComponents'

import './index.css'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'

const trendingUrl =
  'https://api.themoviedb.org/3/trending/all/week?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae'

const topRatedUrl =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae&language=en-US'

const originalsUrl =
  'https://api.themoviedb.org/3/discover/tv?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae'

class Home extends Component {
  state = {banner: {}}

  componentDidMount() {
    this.getBanner()
  }

  getBanner = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=77b8f4b9c7d3ecf6b9f0b992120c1dae',
    )
    const data = await response.json()
    const formattedBannerData = data.results.map(film => ({
      name: film.name,
      backdropPath: film.backdrop_path,
      overview: film.overview,
    }))
    console.log(formattedBannerData)
    const randomIndex = Math.ceil(
      Math.random() * formattedBannerData.length - 1,
    )
    console.log(randomIndex)
    const bannerData = formattedBannerData[0]

    const backgroundImageUrlResponse = await fetch(
      `${imageBaseUrl + bannerData.backdropPath}`,
    )
    console.log(backgroundImageUrlResponse)

    const banner = {
      ...bannerData,
      backgroundImageUrl: backgroundImageUrlResponse.url,
    }
    console.log(banner)
    this.setState({banner})
  }

  render() {
    const {banner} = this.state
    const {name, backgroundImageUrl, overview} = banner
    return (
      <>
        <Header />
        <HomeContainer>
          <Banner backgroundImageUrl={backgroundImageUrl}>
            <ContentContainer>
              <BannerTitle>{name}</BannerTitle>
              <OverView>{overview}</OverView>
              <PlayButton>Play</PlayButton>
            </ContentContainer>

            <FadeBottom>{null}</FadeBottom>
          </Banner>
          <MovieContainer>
            <MovieListContainer>
              <MovieListTitle>Trending Now</MovieListTitle>
              <MovieSlider fetchUrl={trendingUrl} />
              <MovieListTitle>Top Rated</MovieListTitle>
              <MovieSlider fetchUrl={topRatedUrl} />
              <MovieListTitle>Originals</MovieListTitle>
              <MovieSlider fetchUrl={originalsUrl} />
            </MovieListContainer>
            <ContactContainer>
              <ContactIcons>
                <AiOutlineGoogle className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaYoutube className="icon" />
              </ContactIcons>
              <ContactText>Contact Us</ContactText>
            </ContactContainer>
          </MovieContainer>
        </HomeContainer>
      </>
    )
  }
}
export default Home
