import React, { useEffect, useState } from 'react';
import './Shop.css'
import Porduct from '../Product/Porduct';

const Shop = () => {
   const [products, setProducts] = useState([]);

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(res => setProducts(res))
   },[]);


    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(x => <Porduct 
                        products={x}
                        key={x.id}
                    ></Porduct>)
                }
            </div>
            <div>
                this is order summary
            </div>
        </div>
    );
};

export default Shop;