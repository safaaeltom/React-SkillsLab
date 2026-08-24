import {useState} from 'react';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
        {id:1, name: "mobile ", type: "redmi ", quantity: 2},
        {id:2, name: "headset ", type: "bluetooth ", quantity: 7},
        {id:3, name: "laptop ", type: "toshipa ", quantity: 20}
    ])

    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState("");
    const [productQuantity, setProductQuantity] = useState("");

    const addProduct = (productName, productType, productQuantity) => {
        if(productName.trim()==="" || productType.trim()==="" || productQuantity<1){
        return;
        }
        setProducts([...products, {
            id: products.length + 1,
            name: productName,
            type: productType,
            quantity: productQuantity
        }])
    };

    return ( 
        <div className="shopping-cart">
            <h2>Cart Items</h2>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <span className="name">{product.name}</span>
                        <span className="type">{product.type}</span>
                        <span className="quantity">{product.quantity}</span>

                    </li>
                ))}
            </ul>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addProduct(productName, productType, productQuantity)

            }}>
                <label htmlFor="product-name">Product</label>
                <input type="text" value={productName}
                placeholder="Enter name"
                onChange={(e)=>setProductName(e.target.value)}
                /><br/>
                <label htmlFor="product-type">Type</label>
                <input type="text" value={productType}
                placeholder="Enter type"
                onChange={(e)=>setProductType(e.target.value)}
                /><br/>
                <label htmlFor="product-quantity">Quantity</label>
                <input type="number" min={0} value={productQuantity}
                placeholder="Enter quantity"
                onChange={(e)=>setProductQuantity(Number(e.target.value))}
                /><br/>
                <button type="submit">Add Products</button>
            </form>
        </div>
     );
}

export default ShoppingCart;