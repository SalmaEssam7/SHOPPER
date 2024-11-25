// //import './Shop.css'

// import { createContext, useState } from "react"
// import all_product from "../assets/all_product"
// export const ShopContext = createContext(null)
// const getDefultCart =()=>{
//     let cart = {};
//         for(let index=0 ; index<all_product.length+1 ; index++){
//             cart[index] =0;
//         }
//         return cart;
//     }
// function ShopContextProvider(props) {
//     const [cartItems, setCartItems]= useState(getDefultCart())
  
//     const addToCart =(itemId)=>{
//       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//     }
//     const removeFromCart =(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//       }
//       const getTotalCartAmmount =()=>{
//         let TotalAmmount = 0;            
//         for(const item in cartItems){
//             if(cartItems[item]>0){
                
//                 let itemInfo = all_product.find((product)=>product.id===Number(item))
//                 TotalAmmount += itemInfo.new_price * cartItems[item]
//             }
//             return TotalAmmount;
//         }
//       }
//       const ContextValue = {getTotalCartAmmount ,all_product, cartItems ,addToCart ,removeFromCart}
//     return (
//      <ShopContext.Provider value={ContextValue}>
//         {props.children}
//      </ShopContext.Provider>
//     )
//   }
  
//   export default ShopContextProvider

import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                } else {
                    console.error(`Product with ID ${item} not found in all_product.`);
                }
            }
        }
        return totalAmount;
    };

    const ContextValue = { getTotalCartAmmount, all_product, cartItems, addToCart, removeFromCart };

    return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>;
}

export default ShopContextProvider;
