import {Component} from 'react'

import SearchContext from '../../context/SearchContext'
import {
  NavHeader,
  NavContent,
  HeaderContainerLg,
  HeaderContainerSm,
  NavItemContainer,
  LogoLg,
  LogoSm,
  NavItem,
  AccountContainer,
  SearchContainerLg,
  SearchInputLg,
  SearchIconLg,
  Avatar,
  SearchContainerSm,
  SearchInputSm,
  SearchIconSm,
  NavIcon,
  NavItemsContainerSm,
  NavItemSm,
  CloseIcon,
  NavLink,
  HeaderBackground,
} from './styledComponents'

class Header extends Component {
  state = {
    isSearch: false,
    isNavItemsShow: false,
  }

  onClickSearchIcon = () => {
    const {setSearchPage} = this.props
    if (setSearchPage !== undefined) {
      setSearchPage(true)
    }

    this.setState({isSearch: true})
  }

  onClickHome = () => {
    const {setSearchPage} = this.props
    if (setSearchPage !== undefined) {
      setSearchPage(false)
    }
    this.setState({isSearch: false})
  }

  onClickClose = () => {
    this.setState({isNavItemsShow: false})
  }

  onClickShowNavItem = () => {
    this.setState({isNavItemsShow: true})
  }

  render() {
    const {isSearch, isNavItemsShow} = this.state
    const {setSearchPage} = this.props

    return (
      <SearchContext.Consumer>
        {value => {
          const {updateSearchInput, search} = value

          const onChangeSearch = event => {
            if (event.key === 'Enter') {
              updateSearchInput(event.target.value)
            }
          }

          const onClickSearchIcon = () => {
            if (setSearchPage !== undefined) {
              setSearchPage(true)
            }

            this.setState({isSearch: true})
            search()
          }

          return (
            <>
              <HeaderBackground>{null}</HeaderBackground>
              <NavHeader>
                <NavContent>
                  <HeaderContainerLg>
                    <NavItemContainer>
                      <NavLink to="/">
                        <LogoLg
                          src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633768656/Group_7399_wca4yy.svg"
                          alt="logo"
                          onClick={this.onClickHome}
                        />
                      </NavLink>
                      <NavLink to="/">
                        <NavItem onClick={this.onClickHome}>Home</NavItem>
                      </NavLink>
                      <NavLink to="/popular">
                        <NavItem>Popular</NavItem>
                      </NavLink>
                    </NavItemContainer>
                    <AccountContainer>
                      {isSearch ? (
                        <SearchContainerLg>
                          <SearchInputLg
                            type="search"
                            onKeyDown={onChangeSearch}
                          />
                          <SearchIconLg />
                        </SearchContainerLg>
                      ) : (
                        <SearchIconLg onClick={onClickSearchIcon} />
                      )}
                      <Avatar
                        src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633865407/Avatar_cbvxo7.svg"
                        alt="avatar"
                      />
                    </AccountContainer>
                  </HeaderContainerLg>

                  <HeaderContainerSm>
                    <NavLink to="/">
                      <LogoSm
                        src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633768656/Group_7399_wca4yy.svg"
                        alt="logo"
                        onClick={this.onClickHome}
                      />
                    </NavLink>
                    <AccountContainer>
                      {isSearch ? (
                        <SearchContainerSm>
                          <SearchInputSm
                            type="search"
                            onKeyDown={onChangeSearch}
                          />
                          <SearchIconSm />
                        </SearchContainerSm>
                      ) : (
                        <SearchIconSm onClick={onClickSearchIcon} />
                      )}
                      <NavIcon
                        src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633867523/add-to-queue_1_teisp3.svg"
                        alt="nav-icon"
                        onClick={this.onClickShowNavItem}
                      />
                    </AccountContainer>
                  </HeaderContainerSm>
                  {isNavItemsShow && (
                    <NavItemsContainerSm>
                      <NavLink to="/">
                        <NavItemSm onClick={this.onClickHome}>Home</NavItemSm>
                      </NavLink>
                      <NavLink to="/popular">
                        <NavItemSm>Popular</NavItemSm>
                      </NavLink>
                      <NavLink>
                        <NavItemSm>Account</NavItemSm>
                      </NavLink>
                      <CloseIcon onClick={this.onClickClose} />
                    </NavItemsContainerSm>
                  )}
                </NavContent>
              </NavHeader>
            </>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}
export default Header
