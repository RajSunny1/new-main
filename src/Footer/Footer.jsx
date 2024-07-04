
import './Footer.css'; // Ensure this file exists and contains the CSS below
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logoImage from './image 1.jpg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImage}  alt="HABOT" /> {/* Replace with actual path to your logo */}
          <p>© R Singhania</p>
        </div>
        <div className="footer-lists">
          <div>
            <h3>Company</h3>
            <ol>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>
          <div>
            <h3>Terms</h3>
            <ol>
              <li><a href="#privacy">Data Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ol>
          </div>
          <div>
            <h3>Related</h3>
            <ol>
              <li><a href="#find-buyer">Find Buyer</a></li>
              <li><a href="#feedback">Feedback</a></li>
            </ol>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
