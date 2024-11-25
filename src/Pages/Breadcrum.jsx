import './Breadcrum.css'
import ArrowIcon from '../assets/breadcrum_arrow.png'
function Breadcrum(props) {
const{product} = props
    return (
     <div className='Breadcrum'>
        HOME <img src={ArrowIcon} alt="" /> SHOP <img src={ArrowIcon} alt="" /> {product.category} <img src={ArrowIcon} alt="" /> {product.name} <img src={ArrowIcon} alt="" />  
     </div>
    )
  }
  
  export default Breadcrum
  