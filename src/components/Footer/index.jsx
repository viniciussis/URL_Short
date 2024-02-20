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
          <svg
            className="link__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="white"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/viniciussis/"
          className="social__link"
          target="_blank"
        >
          <svg
            className="link__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="white"
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/_devinicius"
          className="social__link"
          target="_blank"
        >
          <svg
            className="link__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="white"
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/_devinicius"
          className="social__link"
          target="_blank"
        >
          <svg
            className="link__icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFF"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            />
          </svg>
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
