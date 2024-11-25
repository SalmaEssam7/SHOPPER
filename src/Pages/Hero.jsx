


 import './Hero.css'
import handIcon from '../assets/hand_icon.png'
import ArrowIcon from '../assets/arrow.png'
import heroIcon from '../assets/hero_image.png'
function Hero() {

    return (
     <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <img src={handIcon} alt="" />
                </div>
                <p>Collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={ArrowIcon} alt="" />
            </div>
        </div>
        <div className="hero-right">
        <img src={heroIcon} alt="" />
        </div>
     </div>
    )
  }
  
  export default Hero
  