import {useState} from 'react';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
        {id:1, name: "mobile ", type: "redmi"},
        {id:2, name: "headset ", type: "bluetooth"},
        {id:3, name: "laptop ", type: "toshipa"}
    ])
    return ( 
        <div className="shopping-cart">
            <h2>Cart Items</h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <span className="name">{product.name}</span>
                        <span className="type">{product.type}</span>
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default ShoppingCart;