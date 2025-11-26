import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Zaridigi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 