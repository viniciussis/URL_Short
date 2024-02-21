import { useState } from 'react'
import './Form.scss'
import PropTypes from 'prop-types'

const Form = ({ link, callingAPI, setLink }) => {
  const [warning, setWarning] = useState(false)
  const onValidate = (e) => {
    e.preventDefault()
    setWarning(false)
    if (link == '') {
      setWarning(true)
    } else {
      callingAPI()
    }
  }
  return (
    <form onSubmit={onValidate} className="form">
      <input
        type="text"
        onChange={setLink}
        value={link}
        name="link"
        id="link"
        placeholder="Shorten a link here..."
        className={`form__link ${warning ? 'form__link--warning' : ''}`}
      />
      {warning && <p className="form__warning">Please add a link</p>}
      <button className="form__button">Shorten It!</button>
    </form>
  )
}

Form.propTypes = {
  link: PropTypes.string.isRequired,
  callingAPI: PropTypes.func,
  setLink: PropTypes.func
}

export default Form
