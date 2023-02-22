import React from 'react';
import data from '../data.json';

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {

    const [products, setProducts] = useState(data);
  {console.log("ProductsPage", products)}

  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={products} />
    </div>
  )
}

export default ProductsPage