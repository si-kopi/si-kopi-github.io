import { useState, useEffect } from 'react';
import { FaCoffee } from "react-icons/fa";
import Img3 from '../../public/images/Gambar-2.png';

export default function Nav() {
    const [cartActive, setCartActive] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const cartButton = document.getElementById('Shoping-cart-button');
            const shopingCart = document.querySelector('.Shoping-cart');
            if (cartButton && shopingCart && !cartButton.contains(event.target) && !shopingCart.contains(event.target)) {
                setCartActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // export default function cartActive(props) {
    //     const  wrapperRef = userRef(null);
    //     cartActive(wrapperCart);

    //     return <div ref={wrapperCart}>{props.children}</div>
    // }

    return (
        <nav className="bg-gradient-to-r from-secondary to-primary fixed w-full z-20 top-0 start-0 border-">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex text-2xl text-white font-cursive">
                    <FaCoffee className="cursor-pointer"/>SIKOPI
                </div>
                <div className="items-center justify-between gap-4 hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-gradient-to-r border-secondary rounded-lg bg-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-secondary dark:bg-secondary md:dark:bg-secondary dark:border-secondary">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white/70 bg-secondary rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white" aria-current="page">
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button 
                        id="Shoping-cart-button" 
                        className="text-white/70 hover:text-white bg-gradient-to-r bg-secondary px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3"
                        onClick={() => setCartActive(!cartActive)}
                    >
                        <i data-feather="Shoping-cart">
                            Order
                        </i>
                        <FaCoffee className="text-xl cursor-pointer"/>
                        <span className="jumlah-badge"></span>
                    </button>

                    <div className={`Shoping-cart ${cartActive ? 'active' : ''}`}>
                        <h2 className="font-cursive text-2xl text-center pt-3 pb-5">
                            Keranjang Belanja</h2>
                        {/* Isi keranjang belanja */}
                            <img src={Img3} alt="Item" style={{ width: '50px', height: '50px' }} />
                            <div>
                                <h4>KOPI</h4>
                                <p>Rp. 10000</p>
                            </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
