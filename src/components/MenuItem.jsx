import { useState } from 'react';
import Img3 from '../../public/images/Gambar-2.png';
import { MdAddShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Menu = () => {
    const [store, setStore] = useState({
        items: [],
        total: 0,
        jumlah: 0,
        keranjang: [],
    });

    const masukKeranjang = (newItem) => {
        const updatedItems = [...store.items, newItem];
        const updatedTotal = store.total + newItem.price;
        const updatedJumlah = store.jumlah + 1;

        console.log('Item added:', newItem);

        setStore({
            ...store,
            items: updatedItems,
            total: updatedTotal,
            jumlah: updatedJumlah,
        });
    };

    const DataMenu = [
        {
            id: 1,
            name: 'Robusta',
            img: Img3,
            price: 20000,
        },
        {
            id: 2,
            name: 'Arabica Blend',
            img: Img3,
            price: 25000,
        },
        {
            id: 3,
            name: 'Capuchino',
            img: Img3,
            price: 30000,
        },
        {
            id: 4,
            name: 'Cappuccino',
            img: Img3,
            price: 35000,
        },
        {
            id: 5,
            name: 'Caffe Latte',
            img: Img3,
            price: 40000,
        },
        {
            id: 6,
            name: 'Americano',
            img: Img3,
            price: 45000,
        },
        {
            id: 7,
            name: 'Cold New',
            img: Img3,
            price: 50000,
        },
        {
            id: 8,
            name: 'Macchiato',
            img: Img3,
            price: 55000,
        },
    ];

    return (
        <div className="justify-center pt-24">
            <div className="text-center m-10">
                <h1 className="text-4xl font-bold font-cursive text-gray-800">
                    MENU SIKOPI
                </h1>
            </div>
            <div className="flex gap-9 justify-center product-card flex-wrap">
                {DataMenu.map((item) => (
                    <div key={item.id} className="text-center rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                        <img src={item.img} alt={item.name} />
                        <h1>{item.name}</h1>
                        <p>Rp.{item.price}</p>
                        <button className="text-white/80 hover:text-white bg-gradient-to-r bg-secondary m-2 mx-6 px-4 py-3 gap-9 flex rounded-full hover:scale-105 duration-200 items-center"
                            onClick={() => masukKeranjang(item)}>
                            <MdAddShoppingCart className="color-white/70 size-6 cursor-pointer" />
                            Tambah Keranjang
                        </button>
                        <div className="">
                            <button className="text-white/80 hover:text-white bg-gradient-to-r bg-secondary m-2 mx-6 px-14 py-3 gap-9 flex rounded-full hover:scale-105 duration-200 items-center">
                                <FaEye className="color-white/70 size-6 cursor-pointer" />
                                Deskripsi
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
