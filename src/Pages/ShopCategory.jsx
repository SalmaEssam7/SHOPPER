
import { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from './ShopContext'
import dropdownIcon from '../assets/dropdown_icon.png'
import Items from './Items'
function ShopCategory(props) {
const {all_product} = useContext(ShopContext)
console.log({all_product})
  return (
   <div className='shop-category'>
    <img  className='shopCategory-banner' src={props.banner} alt="" />
    <div className="shopCategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 Products
      </p>
      <div className="shopCategory-sort">
        Sort by <img src={dropdownIcon} alt="" />
      </div>
    </div>
    <div className="shopCategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }else{
          return null
        }
      })}
    </div>
    <div className="shopCategory-loadmore">
      Explore More
    </div>
   </div>
  )
}

export default ShopCategory
