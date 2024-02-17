import './Form.scss'

const Form = () => {
  return (
    <form action="submit" className="form">
      <input type="text" name="link" id="link" placeholder='Shorten a link here...' className="form__link" />
      <button className="form__button">Shorten It!</button>
    </form>
  )
}

export default Form
