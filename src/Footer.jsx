

import Footerlogo from './assets/logo_big.png'
import instagramIcon from './assets/instagram_Icon.png' 
import pintesterIcon from './assets/pintester_Icon.png' 
import whatsappIcon from './assets/whatsapp_Icon.png' 
import './Footer.css'
function Footer() {
  return (
 <div className="Footer">
   <div className="footer-logo">
    <img src={Footerlogo} alt="" />
    <p>SHOPPER</p>
   </div>
   <ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offers</li>
    <li>About</li>
    <li>Contact</li>
   </ul>
   <div className="footer-social-icons">
    <div className="footer-icons-container">
        <img src={instagramIcon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={pintesterIcon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsappIcon} alt="" />
    </div>
   </div>
   <div className="footer-copyright">
    <hr />
    <p>Copyright @ 2024 - All Right Reserved.</p>
   </div>
 </div>
  )
}

export default Footer
