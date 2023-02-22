import React from 'react';
import data from '../data.json';

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [products, setProducts] = useState(data);
  
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <ProductTable products={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  )
}

export default ProductsPage