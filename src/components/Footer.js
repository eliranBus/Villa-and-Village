import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>	&#169; {year} all rights reserved to 
          <a className="logo footer-logo" href="#header">
            Villa <span className="and-wrapper"><span className="and">&</span></span> Village{" "}
          </a>
      </p>
    </footer>
  )
}

export default Footer;