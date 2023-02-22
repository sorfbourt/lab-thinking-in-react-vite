import React from 'react'
import ProductRow from './ProductRow '

function ProductTable({products, searchQuery}) {
    

    {console.log("searchQuery", searchQuery)}

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
            {
            products.filter(product => {
                if(searchQuery ===""){
                    return product
                  }
                if(product.name.toLowerCase().includes(searchQuery.toLowerCase())){
                    return product
                }
            }).map(product => <ProductRow key={product.id} product={product}/>)}

            </tbody>


        </table>
    </div>
  )
}

export default ProductTable