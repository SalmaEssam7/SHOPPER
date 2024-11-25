import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from './ShopContext.jsx'
import removeIcon from '../assets/cart_cross_icon.png';

function CartItems() {
   const {getTotalCartAmmount,all_product, cartItems ,addToCart ,removeFromCart} = useContext(ShopContext)
    return (
     <div className='CartItems'>
        <div className="CartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
    if (cartItems[e.id] > 0) {
        
        return <>
            <div>
                <div className="CartItems-format CartItems-format-main">
                    <img src={e.image} alt="" className="cartIcon-product-icon" />
                    <p>{e.name}</p>
                    <p>$ {e.new_price}</p>
                    <button className="CartItems-quantity">{cartItems[e.id]}</button>
                    <p>$ {e.new_price * cartItems[e.id]}</p>
                    <img
                        className="cartIcon-remove-product-icon"
                        src={removeIcon}
                        onClick={() => {
                            removeFromCart(e.id);
                        }}
                        alt=""
                    />
                </div>
            </div>
            </>
    }
    return null;
})}

        <div className="CartItems-down">
        <div className="CartItems-total">
            <h1>Cart Totals</h1>
            <div>
            <div className="CartItems-total-items">
                <p>SubTotal</p>
                <p>$ {getTotalCartAmmount()}</p>
            </div>
            <hr />
            <div className="CartItems-total-items">
                <p>Shiping Free</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="CartItems-total-items">
                <h3>Total</h3>
                <h3>$ {getTotalCartAmmount()}</h3>
            </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="CartItems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="CartItems-promoBox">
          <input type="text" placeholder='Promo Code' />
            <button>Submit</button>
        </div>
        </div>
        </div>

     </div>
    )
  }
  
  export default CartItems
  