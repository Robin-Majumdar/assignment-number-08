import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../../../public/Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-6">Explore Cutting-Edge Gadgets</h2>
            <div className='flex justify-between gap-5 mt-6 mb-6'>
                <div className='w-1/5  h-[500px] p-2 border rounded bg-[#D9D9D9]'>
                    
                </div>
                <div className='w-4/5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                        {
                            products.map(product => <Product product={product} key={product.product_id}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;