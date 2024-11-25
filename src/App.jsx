
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './Pages/Shop.jsx'
import ShopCategory from  './Pages/ShopCategory.jsx'
import Product from  './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LogInSignUp from './Pages/LogInSignUp.jsx'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/Mens" element={<ShopCategory banner={men_banner} category='men'/>}/>
      <Route path="/Womens" element={<ShopCategory banner={women_banner} category='women'/>}/>
      <Route path="/Kids" element={<ShopCategory banner={kids_banner} category='kid'/>}/>
      <Route path="/Product" element={<Product />}>
        <Route path=':ProductId' element={<Product/>}/>
      </Route>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/LogIn" element={<LogInSignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
