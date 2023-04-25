import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="top">
            <div>
                <h4>Tour With Ankit</h4>
                <p>choose your favourite destination</p>

            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>

        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">Version</a>

            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">Version</a>

            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">Version</a>

            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">Version</a>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
