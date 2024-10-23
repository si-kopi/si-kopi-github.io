import { useState, useEffect } from 'react';
import supabase from './supabaseClient';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data, error } = await supabase.from('products').select('*');
        if (error) console.error('Error fetching products:', error);
        else setProducts(data);
    };

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
