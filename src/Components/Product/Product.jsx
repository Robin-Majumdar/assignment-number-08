import React from 'react';

const Product = ({ product }) => {

    const { product_id, product_title, product_image, category, price, description, specification, availability, rating
    } = product;
    return (
        <div className="card bg-base-100 shadow-xl p-2">
            <figure className='p-2 bg-[#D9D9D9]'>
                <img
                    src={product_image}
                    className='h-[180px] w-[300px] rounded-lg'
                    alt="Shoes" />
            </figure>
            <div className='p-2 space-y-2'>
                <h2 className="card-title">{product_title}</h2>
                <p><span className='text-base font-semibold'>Price: </span>{price} $</p>
                <p><span className='text-base font-semibold'>Ratings: </span>{rating}</p> 
            </div>
            <div>
                <button></button>
            </div>
        </div>
    );
};

export default Product;



// {
//     "product_id": "P007",
//     "product_title": "Bose QuietComfort Earbuds II",
//     "product_image": "https://i.ibb.co.com/7GvbXyc/01.png",
//     "category": "Earbuds",
//     "price": 279,
//     "description": "Premium earbuds with world-class noise cancellation.",
//     "specification": [
//         "Active Noise Cancellation",
//         "6-hour battery life",
//         "Bluetooth 5.1",
//         "Water and sweat resistant"
//     ],
//     "availability": true,
//     "rating": 4.4
// },