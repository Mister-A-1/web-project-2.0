import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe">
          <h4>Subscribe to our emails</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Email" required />
            <button type="submit">→</button>
          </form>
        </div>

        <div className="social-icons">
          <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
          <a href="#" target="_blank"><i className="fab fa-tiktok"></i></a>
          <a href="#" target="_blank"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, GameStop Pakistan Developed by Deadly Clashers</p>
      </div>
    </footer>
  );
}

export default Footer;
