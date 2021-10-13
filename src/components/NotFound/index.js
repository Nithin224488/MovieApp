import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundDescription,
  HomeButton,
  ErrorContainer,
  ErrorCode,
  Error,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <NotFoundHeading>Lost Your Way ?</NotFoundHeading>
      <NotFoundDescription>
        Sorry, we can’t find that page. You’ll find lots to explore on the home
        page
      </NotFoundDescription>
      <Link to="/">
        <HomeButton>Home</HomeButton>
      </Link>
      <ErrorContainer>
        <ErrorCode>Error code</ErrorCode>
        <Error>NSES- 404</Error>
      </ErrorContainer>
    </NotFoundContainer>
  </>
)

export default NotFound
