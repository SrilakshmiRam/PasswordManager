import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from './components/PasswordItem'

import './App.css'

class App extends Component {
  state = {
    websitesList: [],
    website: '',
    userName: '',
    password: '',
    checked: false,
    searchInput: '',
  }

  updateWebsitesList = id => {
    const {websitesList} = this.state
    this.setState({
      websitesList: websitesList.filter(eachItem => eachItem.id !== id),
    })
  }

  onChangeWebsiteName = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onchangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  renderEmptyView = () => (
    <div className="emptyView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="passwords-image"
      />
      <p className="noPasswords">No Passwords</p>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const newItem = {
      id: uuidv4(),
      websiteName: website,
      name: userName,
      password,
    }

    this.setState(prevstate => ({
      websitesList: [...prevstate.websitesList, newItem],
    }))

    this.setState({
      website: '',
      userName: '',
      password: '',
    })
  }

  renderpasswordsList = () => {
    const {websitesList, checked, searchInput} = this.state
    const searchResults = websitesList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput),
    )
    return (
      <>
        {searchResults.map(eachItem => (
          <PasswordItem
            passwordDetails={eachItem}
            key={eachItem.id}
            isChecked={checked}
            updateWebsitesList={this.updateWebsitesList}
          />
        ))}
      </>
    )
  }

  render() {
    const {websitesList, website, userName, password, searchInput} = this.state
    const searchResults = websitesList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput),
    )
    const websiteListLength = searchResults.length
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="form-card-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="icon-image"
              />
              <hr className="separation" />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-text"
                onChange={this.onChangeWebsiteName}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="icon-image"
              />
              <hr className="separation" />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-text"
                onChange={this.onChangeUserName}
                value={userName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="icon-image"
              />
              <hr className="separation" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-text"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="user-login"
          />
        </div>
        <div className="passwords-container">
          <div className="search-container">
            <div className="noOfItems-container">
              <h1 className="passwords">Your Passwords</h1>
              <p className="count">{websitesList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onchangeSearchInput}
              />
            </div>
          </div>
          <hr className="horizontal" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onClick={this.onClickCheckbox}
            />
            <label htmlFor="checkbox" className="showPasswords">
              Show Passwords
            </label>
          </div>
          <ul className="items-list">
            {websiteListLength > 0
              ? this.renderpasswordsList()
              : this.renderEmptyView()}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
