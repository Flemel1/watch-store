import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__menu">
            <h4>Menu</h4>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className="footer__wrapper__support">
            <h4>Support</h4>
            <ul>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer__wrapper__contact">
            <h4>Contact</h4>
            <p>Email : ourstore@example.com</p>
            <p>Social Media : watchstore</p>
            <p>Telephone : +62 12345678</p>
        </div>
        <div className="footer__wrapper__follow">
            <h4>Follow Us</h4>
            <div className="footer__wrapper__follow__icon">
            <Icon icon="akar-icons:instagram-fill" color="#000" height="24" />
            <Icon icon="ant-design:facebook-filled" color="#000" height="24" />
            <Icon icon="akar-icons:youtube-fill" color="#000" height="26" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
