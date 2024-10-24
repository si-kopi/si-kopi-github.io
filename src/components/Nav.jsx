import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import Img3 from '../../public/images/Gambar-2.png';

export default function Nav() {

    return (
        <nav className="bg-gradient-to-r from-secondary to-primary fixed w-full z-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                    data-aos="fade-down" data-aos-once="true"
                    className="flex text-2xl text-white font-cursive cursor-pointer">
                    <GiCoffeeCup className="size-9 mr-2" /><h1 className="mt-2">SIKOPI</h1>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay="300"
                    className="items-center justify-between gap-4 hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-gradient-to-r border-secondary rounded-lg bg-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-secondary dark:bg-secondary md:dark:bg-secondary dark:border-secondary">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white/70 bg-secondary rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#services" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 px-3 text-white/70 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-white dark:text-white/70 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button
                        id="Shoping-cart-button"
                        className="text-white/70 hover:text-white bg-gradient-to-r bg-secondary px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                        <FaCartPlus className="text-xl cursor-pointer" />
                        <i data-feather="Shoping-cart">
                            Order
                        </i>
                        <span className="jumlah-badge"></span>
                    </button>
                    {/* Isi keranjang belanja */}
                    {((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <img src={Img3} alt="Item" style={{ width: '50px', height: '50px' }} />
                            <div>
                                <h4>{item.product_name}</h4>
                                <p>Rp. {item.product_price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}