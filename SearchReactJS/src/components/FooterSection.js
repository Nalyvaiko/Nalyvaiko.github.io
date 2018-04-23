import React from "react";

const FooterSection = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="footer__block">
        <a className="head__logo-link head__logo-link--footer">REACT SEARCH</a>
      </div>
      <div className="footer__block footer__block--design">
        <p className="footer__design">designed by</p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Nalyvaiko"
          className="footer__logo"
        >
          Vitalii Nalyvaiko
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
