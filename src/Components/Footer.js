import Logo from '../assets/logo-v.png';
function Footer() {
    return (
      <footer>
        <div>
        <img src={Logo} alt="Little Lemon Logo"/>
        </div>
        <ul>
            <li>Doormat Nav igation</li>
            <li>Home</li>
            <li>About</li>
            <li>menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li>Address</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
        <ul>
            <li>Social Media Links</li>
            <li>Address</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
      </footer>
    );
  }
  export default Footer;