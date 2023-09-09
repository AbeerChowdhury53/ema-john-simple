import React from 'react';
import './Product.css'
const Porduct = (props) => {
    const {name, img, price, seller, ratings} = props.products
    return (
        <div className='card'>
        <div></div>
            <img src={img} alt="" />
           <div className='details'>
           <h4>{name}</h4>
            <p>Price %{price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating : {ratings} Stars</p>
           </div>
        <button className='add-btn'>Add To Cart</button>            
        </div>
        
    );
};
import './Product.css'
export default Porduct;