import React, { useState } from 'react';
import icon1 from './img/icon1.svg';
import './Footer.css';
//--------------------------------------------------------------------------------------------------//
function Footer() {
  const [icons] = useState([
    {
      src: icon1,
      link: 'http://www.linkedin.com/in/omar-salah-697353160',
      alt: 'Linkedin',
    },
  ]);
  //--------------------------------------------------------------------------------------------------//
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 justify-content-center">
          <div className="footer">
            {icons.map((icon) => (
              <a href={icon.link} target="_blank" rel="noreferrer">
                <img src={icon.src} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; Copyright example.com, Inc. 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
