import Img2 from '../../public/images/Gambar-2.png';

const ServicesData = [
    {
        id:1,
        img: Img2,
        name:"Espresso",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",

    },
    {
        id:2,
        img: Img2,
        name:"Americano",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",

    },
    {
        id:3,
        img: Img2,
        name:"Cappuccino",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",

    },
]

export default function Services() {
  return (
    <>
    <span id="services"></span>
    <div className="py-10">
     <div className="container">
        <div className="text-center mb-20 ">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
                Best Coffee For You</h1>
        </div>
        {/* Menu Favorite */}
        <div className="sm:min-h-[550px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            { ServicesData.map((data, index) => {
                    return (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={index}
                            className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                                {/* Gambar */}
                            <div className="h-[150px]">
                                <img src={data.img}
                                className="max-w-[200px] block mx-auto transform -translate-y-14
                                group-hover:scale-110
                                group-hover:rotate-6 duration-300" />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{data.name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300
                                text-sm line-clamp-2">{data.description}</p>
                            </div>
                        </div>
                    );
               } ) }
        </div>
     </div>       
    </div>
    </>
  )
}
