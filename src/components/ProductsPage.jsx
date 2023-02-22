import React from 'react';
import data from '../data.json';

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [inStockChecked, setInStockChecked] = useState(false)
    const [products, setProducts] = useState(data);
  
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} inStockChecked={inStockChecked} setInStockChecked={setInStockChecked}/>
        <ProductTable products={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery} inStockChecked={inStockChecked} />
    </div>
  )
}

export default ProductsPage