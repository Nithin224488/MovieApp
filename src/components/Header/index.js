import {Component} from 'react'
import {Link} from 'react-router-dom'
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
} from './styledComponents'

class Header extends Component {
  state = {
    isSearch: false,
    isNavItemsShow: false,
  }

  onClickSearchIcon = () => {
    const {setSearchPage} = this.props
    setSearchPage()
    this.setState({isSearch: true})
  }

  onClickClose = () => {
    this.setState({isNavItemsShow: false})
  }

  onClickShowNavItem = () => {
    this.setState({isNavItemsShow: true})
  }

  render() {
    const {isSearch, isNavItemsShow} = this.state

    return (
      <SearchContext.Consumer>
        {value => {
          const {updateSearchInput} = value

          const onChangeSearch = event => {
            updateSearchInput(event.target.value)
          }

          return (
            <NavHeader>
              <NavContent>
                <HeaderContainerLg>
                  <NavItemContainer>
                    <Link to="/">
                      <LogoLg
                        src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633768656/Group_7399_wca4yy.svg"
                        alt="logo"
                      />
                    </Link>
                    <Link to="/">
                      <NavItem>Home</NavItem>
                    </Link>
                    <Link to="/popular">
                      <NavItem>Popular</NavItem>
                    </Link>
                  </NavItemContainer>
                  <AccountContainer>
                    {isSearch ? (
                      <SearchContainerLg>
                        <SearchInputLg
                          type="search"
                          onChange={onChangeSearch}
                        />
                        <SearchIconLg />
                      </SearchContainerLg>
                    ) : (
                      <SearchIconLg onClick={this.onClickSearchIcon} />
                    )}
                    <Avatar
                      src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633865407/Avatar_cbvxo7.svg"
                      alt="avatar"
                    />
                  </AccountContainer>
                </HeaderContainerLg>

                <HeaderContainerSm>
                  <LogoSm
                    src="https://res.cloudinary.com/dsepzpw0f/image/upload/v1633768656/Group_7399_wca4yy.svg"
                    alt="logo"
                  />
                  <AccountContainer>
                    {isSearch ? (
                      <SearchContainerSm>
                        <SearchInputSm
                          type="search"
                          onChange={onChangeSearch}
                        />
                        <SearchIconSm />
                      </SearchContainerSm>
                    ) : (
                      <SearchIconSm onClick={this.onClickSearchIcon} />
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
                    <NavItemSm>Home</NavItemSm>
                    <NavItemSm>Popular</NavItemSm>
                    <NavItemSm>Account</NavItemSm>
                    <CloseIcon onClick={this.onClickClose} />
                  </NavItemsContainerSm>
                )}
              </NavContent>
            </NavHeader>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}
export default Header
