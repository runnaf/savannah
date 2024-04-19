import React from 'react';
import  { useState } from 'react';

import Product from '../../entities/Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);


    const addProduct = () => {
        const newProduct  = new Product(products.length + 1, `Product ${products.length +1}`);
        setProducts([...products, newProduct]);
        };

const deleteProduct = id => {
    const updatedProducts = products.filter(product => product.id !== id);

    setProducts(updatedProducts);
};

return (
<div>
    <h2>Product List</h2>
    <button onClick={addProduct}>Add Product</button>
    <ul>
        {products.map(product => (
            <li key={product.id}>
                {product.name}{''}
                <button onClick={() =>
                deleteProduct(product.id)}>
                Delete
                </button>
            </li>
        ))}
    </ul>
</div>
);
};

export default ProductList;