import { useState } from 'react'
import './Form.scss'

const Form = ({ link, callingAPI, setLink }) => {
  const [warning, setWarning] = useState(false)
  const onValidate = () => {
    setWarning(false)
    if (link == '') {
      setWarning(true)
    }
  }
  return (
    <form onSubmit={callingAPI} className="form">
      <input
        type="text"
        onChange={setLink}
        onBlur={onValidate}
        onBlurCapture={onValidate}
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

export default Form
