import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          join the adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button ButtonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investers</Link>
            <Link to="/">Terms of services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investers</Link>
            <Link to="/">Terms of services</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> Video</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investers</Link>
            <Link to="/">Terms of services</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investers</Link>
            <Link to="/">Terms of services</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target=" blank"
              aria-label="facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>

            <Link
              className="social-icon-link instagram"
              to="/"
              target=" blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>

            <Link
              className="social-icon-link twitter"
              to="/"
              target=" blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>

            <Link
              className="social-icon-link youtube"
              to="/"
              target=" blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>

            <Link
              className="social-icon-link linkedin"
              to="/"
              target=" blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
