import './index.css'

const PasswordItem = props => {
  const {passwordDetails, updateWebsitesList, isChecked} = props
  const {websiteName, name, password, id} = passwordDetails
  console.log(name)

  const onClickDelete = () => {
    updateWebsitesList(id)
  }

  return (
    <li className="passwordItem">
      <div className="initial-container">
        <h1 className="initial">{name[0]}</h1>
      </div>
      <div className="websiteDetials">
        <p className="title">{websiteName}</p>
        <p className="title">{name}</p>
        <p className="title">
          {isChecked ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </p>
      </div>

      <button
        type="button"
        className="deleteBtn"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem