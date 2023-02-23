import React from 'react'
import ProductRow from './ProductRow '

function ProductTable({products, searchQuery, inStockChecked}) {
    

    //{console.log("searchQuery", searchQuery)}

  return (
    <div>
        


        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>

            {/* {inStockChecked === true ? "hi" : ""} */}
            {
            products.filter(product => {
                if(searchQuery ===""){
                    return product
                  }
                if(product.name.toLowerCase().includes(searchQuery.toLowerCase())){
                    return product
                }
            }).filter(product =>{
                if(inStockChecked === true){
                    if(product.inStock === true){
                       console.log("IN STOCK IS CHECKED!")
                    return product
                   }
                }
                if(inStockChecked === false){
                    if(product.inStock === true || product.inStock === false){
                    return product
                   }
                }
            })
            .map(product => <ProductRow key={product.id} product={product}/>)
            }

            </tbody>


        </table>
    </div>
  )
}

export default ProductTable