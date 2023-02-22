import React from 'react'

function ProductRow ({product}) {

    return (
    <React.Fragment>
        
<tr style={product.inStock === false ? {color: `red`} : {}}>
    <td>{product.name}</td>
    <td>{product.price}</td>
</tr>
        
    </React.Fragment>
  )
}

export default ProductRow 