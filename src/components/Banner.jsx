import BannerImg from "../../public/images/CoffeWhite.png";
import BgTexture from "../../public/images/coffee-texture.jpg";
import { FaGrinStars } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";

export default function Banner() {

   const bgImage = {
      backgroundImage: `url(${BgTexture})`,
      backgroundColor: '#270c03',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
   };

   return (
      <>
      <span id="about"></span>
      <div style={bgImage}>
         <div className="container min-h-[750px] flex justify-center items-center py-12 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div data-aos="zoom-in">
                  <img src={BannerImg} className="max-w-[750px] w-full mx-auto spin drop-shadow-xl)" />
               </div>
               <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1 data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive">
                     Premium Blen COffee
                  </h1>
                  <p data-aos="fade-up"
                   className="text-sm text-gray-500 tracking-wide leading-5">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eligendi sapiente omnis fugiat facilis magni dolor vel eos pariatur illum, excepturi doloremque ipsam a, amet culpa rerum? Et, alias debitis.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-5">
                        <div data-aos="fade-up" className="flex items-center gap-3">
                           <FaGrinStars className=" text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                           <span>Premium Coffee</span>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex items-center gap-3">
                           <GiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                           <span>Hot Coffee</span>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-offset="0"
                        className="flex items-center gap-3">
                           <RiDrinksFill className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                           <span>Cold Coffee</span>
                        </div>
                     </div>
                     <div data-aos="slide-left"
                      className="border-l-4 border-primary/50 pl-6 space-y-3">
                        <h1 className="text-2xl semibold font-cursive">
                           Tea Lover
                        </h1>
                        <p className="text-gray-500 text-sm">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, delectus! Quae excepturi tempore repellat facilis?
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}