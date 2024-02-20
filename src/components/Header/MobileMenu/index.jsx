import './MobileMenu.scss'

const MobileMenu = () => {
  return (
    <nav className="mobileMenu">
      <div className="mobileMenu__links">
        <button className='__links'>Features</button>
        <button className='__links'>Pricing</button>
        <button className='__links'>Resourses</button>
      </div>
      <div className="mobileMenu__divider"/>
      <div className="mobileMenu__login">
        <button className='__links'>Login</button>
        <button className='__links __links--green'>Sign Up</button>
      </div>
    </nav>
  )
}

export default MobileMenu
