import {Component} from 'react'
import Slider from 'react-slick'
import {Poster} from './styledComponents'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}

class MoviesSlider extends Component {
  state = {movieList: []}

  componentDidMount() {
    this.getMovieList()
  }

  getMovieList = async () => {
    const {fetchUrl} = this.props
    const response = await fetch(`${fetchUrl}`)
    const data = await response.json()
    this.setState({movieList: data.results})
  }

  renderSlider = () => {
    const {movieList} = this.state

    return (
      <Slider {...settings}>
        {movieList.map(movie => {
          const movieImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          return (
            <div key={movie.id}>
              <Poster
                src={movieImage}
                alt="poster"
                width="100%"
                height="100%"
              />
            </div>
          )
        })}
      </Slider>
    )
  }

  render() {
    const {movieList} = this.state
    return movieList.length ? this.renderSlider() : null
  }
}

export default MoviesSlider
