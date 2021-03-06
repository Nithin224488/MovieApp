import {Component} from 'react'

import {FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'
import {AiOutlineGoogle} from 'react-icons/ai'

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

class HomePage extends Component {
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
      title: film.title,
      originalName: film.original_name,
      backdropPath: film.backdrop_path,
      overview: film.overview,
    }))

    const randomIndex = Math.ceil(
      Math.random() * formattedBannerData.length - 1,
    )

    const bannerData = formattedBannerData[randomIndex]

    const backgroundImageUrlResponse = await fetch(
      `${imageBaseUrl + bannerData.backdropPath}`,
    )

    const banner = {
      ...bannerData,
      backgroundImageUrl: backgroundImageUrlResponse.url,
    }

    this.setState({banner})
  }

  spliceString = overview => {
    if (overview.length > 250) {
      return overview.slice(0, 251).concat('...')
    }
    return overview
  }

  render() {
    const {banner} = this.state
    const {name, title, originalName, backgroundImageUrl, overview} = banner

    return (
      <>
        <HomeContainer>
          <Banner backgroundImageUrl={backgroundImageUrl}>
            <ContentContainer>
              <BannerTitle>{title || name || originalName}</BannerTitle>
              <OverView>{overview && this.spliceString(overview)}</OverView>
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
export default HomePage
