import React from 'react'
import products from "../data/productsData";

const MainContent =() => {
    console.log(products);
    const listItems = products.map((item) => 
        <div className='card' key={item.id}>
            <div className='card_img'>
                <img src={item.image} alt="sneakers" />
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className='price'><span>{item.currency}</span>{item.price}</p>
                <div className='btn'>Add to cart</div>
            </div>
        </div>
    );
    return (
        <div className='main_content'>
            <h3>Shoes Collection</h3>
            {listItems}
        </div>
    )
}
export default MainContent;