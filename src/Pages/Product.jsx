


import { useParams } from 'react-router-dom'
import './Product.css'
import { ShopContext } from './ShopContext'
import { useContext } from 'react';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'
import RelatedProducts from './RelatedProducts'
function Product() {
  const {all_product} = useContext(ShopContext)
  const {ProductId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(ProductId))
  return (
   <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product} />
    <DescriptionBox/>
    <RelatedProducts/>
   </div>
  )
}

export default Product
