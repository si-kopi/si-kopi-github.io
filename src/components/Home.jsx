import HeroImg from '../../public/images/Gambar-1.png';

export default function Home() {


  return (
    <div className="min-h-[650px] sm:min-h-[750px] w-full pt-32 bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="order-2 sm:order-1">
            <h1 className="pt-12 text-4xl sm:text-5xl lg:text-7xl font-bold font-Pacifico">
              <h1 data-aos="zoom-in"
                data-aos-once="true"><span
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="text-primary font-cursive">SIKOPI</span> adalah harmoni antara Teknologi & Seni <br /> menyeduh <span
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    className="text-primary font-cursive">KOPI</span></h1>
<<<<<<< HEAD
=======

>>>>>>> 8e528fe06f6e3f6aa7caff8ce12e6c99fe3ef2c0
            </h1>
            <div className="pt-9" >
              <a href="/menu">
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full
                                        px-4 py-2 text-white hover:scale-105 duration-200">
                  Lihat Menu
                </button>
              </a>
            </div>

          </div>
          {/* Buat Menambahkan gambar */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img src={HeroImg}
              alt=""
              className="w-[450px] sm-w[550px] sm:scale-130 mx-auto spin"
            />
            <div data-aos="fade-left" className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
              <h1>Hallo Costumer</h1>
            </div>
            <div data-aos="fade-right" className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
              <h1>Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}