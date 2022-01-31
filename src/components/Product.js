import React from 'react';
import '../styles/Product.css'

function Product({title, image, price, rating}) {
  return (
        <div className='product'>
            <div className='productInfo'>
                <p className='productTitle'>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className='productRating'>
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p>
                ))}
            </div>
            <img src={image} />
            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
