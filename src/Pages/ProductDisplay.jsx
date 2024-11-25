import "./ProductDisplay.css";
import starIcon from '../assets/star_icon.png'
import stardullIcon from '../assets/star_dull_icon.png'
import { useContext } from "react";
import {ShopContext} from './ShopContext.jsx'
function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="ProductDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img src={product.image} alt="" className="productDisplay-img-main" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={starIcon} alt="" />
        <img src={stardullIcon} alt="" />
        <p>(133)</p>
      </div>
      <div className="productDisplay-right-prices">
      <div className="productDisplay-right-prices-old">$ {product.old_price}</div>
      <div className="productDisplay-right-prices-new">$ {product.new_price}</div>
   
        </div>
        <div className="productDisplay-right-description">
        a lightweight, usually knitted, pullover shirt, 
        close-fitting and with a HIGH neckline and FULL sleeves,
         worn as an undershirt or outer garment. All Details.
        </div>
        <div className="productDisplay-right-size">
       <h1>Select Size</h1>
       <div className="productDisplay-right-sizes">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
        </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplay-right-category"><span>Category:</span> Women , T-Shirt , Crop Top</p>
        <p className="productDisplay-right-category"><span>Tags:</span> Modern , Latest</p>
      
      </div>
    </div>
  );
}

export default ProductDisplay;
