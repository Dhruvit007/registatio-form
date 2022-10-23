import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isSubmitted: true,
    firstNameErr: '',
    secondNameErr: '',
  }

  onFirstNameBlur = event => {
    if (event.target.value === '') {
      this.setState({firstNameErr: 'Required'})
    } else {
      this.setState({firstNameErr: ''})
    }
  }

  firstNameChange = event => {
    this.setState({firstname: event.target.value})
  }

  onSecondNameBlur = event => {
    if (event.target.value === '') {
      this.setState({secondNameErr: 'Required'})
    } else {
      this.setState({secondNameErr: ''})
    }
  }

  lastNameChange = event => {
    this.setState({lastname: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname === '') {
      this.setState({firstNameErr: 'Required'})
    }

    if (lastname === '') {
      this.setState({secondNameErr: 'Required'})
    }
    if (firstname !== '' && lastname !== '') {
      this.setState({isSubmitted: false})
    }
  }

  renderFormData = () => {
    const {firstNameErr, secondNameErr, firstname, lastname} = this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="user-input-container">
          <label className="label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            onBlur={this.onFirstNameBlur}
            onChange={this.firstNameChange}
            className="input"
            id="firstName"
            type="text"
            value={firstname}
          />
          <p className="error-msg">{firstNameErr}</p>
        </div>
        <div className="user-input-container">
          <label className="label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            onBlur={this.onSecondNameBlur}
            onChange={this.lastNameChange}
            className="input"
            id="lastName"
            type="text"
            value={lastname}
          />
          <p className="error-msg">{secondNameErr}</p>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }

  onAnotherResponse = () => {
    this.setState({isSubmitted: true, firstname: '', lastname: ''})
  }

  renderFormSubmitted = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-text">Submitted Successfully</p>
      <button onClick={this.onAnotherResponse} type="button" className="btn">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="main-heading">Registration</h1>
          {isSubmitted ? this.renderFormData() : this.renderFormSubmitted()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
