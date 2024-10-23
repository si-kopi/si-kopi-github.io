import { useState, useEffect } from 'react';
import supabase from './supabaseClient';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        const { data, error } = await supabase
            .from('cart_items')
            .select('*, products(*)');
        if (error) console.error('Error fetching cart items:', error);
        else setCartItems(data);
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.products.name} - {item.quantity} pcs
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
