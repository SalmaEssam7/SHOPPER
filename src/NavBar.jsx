import logo from './assets/logo.png'
 import carticon from './assets/cart_icon.png'
import './NavBar.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

function NavBar() {
const [menu ,setMenu] = useState("Shop")
  return (
 <div className="NavBar">
    <div className="NavBar-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
    </div>
    <ul className="NavBar-menu">
          <li onClick={()=>{setMenu("Shop")}}> <Link style={{textDecoration:'none', color: '#626262'}} to='/'>Shop</Link> {menu==="Shop"?<hr />:<></>}</li>
          <li onClick={()=>{setMenu("Mens")}}> <Link style={{textDecoration:'none', color: '#626262'}} to='/Mens'>Men</Link> {menu==="Mens"?<hr />:<></>}</li>
          <li onClick={()=>{setMenu("Womens")}}> <Link style={{textDecoration:'none', color: '#626262'}} to='/Womens'>Women</Link> {menu==="Womens"?<hr />:<></>}</li>
          <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'none', color: '#626262'}} to='/Kids'>Kids</Link> {menu==="Kids"?<hr />:<></>}</li>
    </ul>
    <div className="NavBar-login-cart">
    <Link to='/LogIn'><button>Log In</button></Link> 
    <Link to='/Cart'><img src={carticon} alt="" /></Link> 
        <div className="NavBar-cart-count">0</div>
    </div>
 </div>
  )
}

export default NavBar
