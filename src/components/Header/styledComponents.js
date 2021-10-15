import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GoSearch} from 'react-icons/go'
import {AiFillCloseCircle} from 'react-icons/ai'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
    width: 100%;
   background:transparent;
}


@media screen and (max-width: 576px) {

    flex-direction: column;
    align-items: center;
    border-bottom-style: none;
  }

`

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #131313;
  opacity: ${props => (props.isBackgroundDark ? '1' : '0.2')};
  height: 103px;
  z-index: 15;
  @media screen and (max-width: 576px) {
    height: 75px;
  }
`
export const NavContent = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  max-width: 1110px;
  z-index: 100;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

export const HeaderContainerLg = styled.div`
  display: flex;
  justify-content: space-between;

  height: 103px;

  width: 100%;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const NavItemContainer = styled.div`
  display: flex;
`
export const LogoLg = styled.img`
  height: 39px;
  width: 135px;
  align-self: center;
`
export const NavItem = styled.h1`
  font-family: 'HK Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.35px;
  text-align: left;
  height: 26px;
  margin-left: 30px;
  color: #ffff;
  align-self: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`
export const AccountContainer = styled.div`
  display: flex;
`
export const SearchContainerLg = styled.div`
  display: flex;
  border: 1px solid #ffffff;
  border-radius: 4px;
  height: 40px;
  width: 175px;
  align-self: center;
`
export const SearchInputLg = styled.input`
  border-radius: 4px;
  padding: 8px 8px 8px 15px;
  border: none;
  outline: none;
  align-self: center;
  width: 130px;
  height: 38px;
  color: #fff;

  background: #131313;
  font-family: 'HK Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`
export const SearchIconLg = styled(GoSearch)`
  align-self: center;
  color: #ffff;
  cursor: pointer;
  height: 24px;
  width: 44px;
  font-size: 24px;
`
export const Avatar = styled.img`
  height: 48px;
  width: 48px;
  align-self: center;
  margin-left: 30px;
`
export const HeaderContainerSm = styled.div`
  display: flex;
  justify-content: space-between;

  height: 75px;
  z-index: 15;

  width: 100%;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
export const LogoSm = styled.img`
  height: 27px;
  width: 100px;
  align-self: center;
`
export const SearchContainerSm = styled.div`
  height: 24px;
  width: 93px;
  align-self: center;
  border-radius: 4px;
  display: flex;
  border: 1px solid #ffffff;
`

export const SearchInputSm = styled.input`
  padding: 4px, 4px, 4px, 10px;
  border: none;
  outline: none;
  align-self: center;
  width: 70px;
  height: 22px;
  background: #131313;
  border-radius: 4px;
`

export const SearchIconSm = styled(GoSearch)`
  align-self: center;
  color: #ffff;
  cursor: pointer;
  height: 16px;
  width: 16px;
  font-size: 16px;
`
export const NavIcon = styled.img`
  height: 24px;
  width: 24px;
  align-self: center;
  margin: 20px;
  margin-right: 0;
`
export const NavItemsContainerSm = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 1;
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
`
export const NavItemSm = styled.p`
  color: #ffffff;

  font-family: 'HK Grotesk';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.35px;
  text-align: left;
  &:hover {
    transform: scale(1.1);
  }
`
export const CloseIcon = styled(AiFillCloseCircle)`
  color: #ffffff;
  align-self: center;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`
