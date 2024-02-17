import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__logo">Shortly</h1>
      <nav className="footer__menu">
        <ul className="menu__subsection">
          <h1 className="subsection__subtitle">Features</h1>
          <li href="" className="subsection__link">
            Link Shortening
          </li>
          <li href="" className="subsection__link">
            Branded Links
          </li>
          <li href="" className="subsection__link">
            AnalyticsAnalytics
          </li>
        </ul>
        <ul className="menu__subsection">
          <h1 className="subsection__subtitle">Resources</h1>
          <li href="" className="subsection__link">
            Blog
          </li>
          <li href="" className="subsection__link">
            Developers
          </li>
          <li href="" className="subsection__link">
            Support
          </li>
        </ul>
        <ul className="menu__subsection">
          <h1 className="subsection__subtitle">Company</h1>
          <li href="" className="subsection__link">
            About
          </li>
          <li href="" className="subsection__link">
            Our Team
          </li>
          <li href="" className="subsection__link">
            Careers
          </li>
          <li href="" className="subsection__link">
            Contact
          </li>
        </ul>
      </nav>
      <div className="footer__social">
        <a
          href="https://github.com/viniciussis"
          className="social__link"
          target="_blank"
        >
          <img
            src="src\assets\images\icon-github.svg"
            alt=""
            className="link__icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/viniciussis/"
          className="social__link"
          target="_blank"
        >
          <img
            src="src\assets\images\icon-linkedin.svg"
            alt=""
            className="link__icon"
          />
        </a>
        <a
          href="https://twitter.com/_devinicius"
          className="social__link"
          target="_blank"
        >
          <img
            src="src\assets\images\icon-twitter.svg"
            alt=""
            className="link__icon"
          />
        </a>
        <a
          href="https://www.instagram.com/_devinicius"
          className="social__link"
          target="_blank"
        >
          <img
            src="src\assets\images\icon-instagram.svg"
            alt=""
            className="link__icon"
          />
        </a>
      </div>
      <p className="footer__message">
        Challenge by
        <a
          className="message__link"
          href="https://www.frontendmentor.io/profile/viniciussis"
          target="_blank"
        >
          {' '}
          Frontend Mentor
        </a>
        . Coded by
        <a
          className="message__link"
          href="https://github.com/viniciussis"
          target="_blank"
        >
          {' '}
          Vinícius S Santos
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
