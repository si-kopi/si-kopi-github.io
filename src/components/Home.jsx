import HeroImg from '../../public/images/Gambar-1.png';

export default function Home() {
 
  
  return (
    <div className="min-h-[650px] sm:min-h-[790px] pt-32 bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
                <h1 className="text-5xl sm:text-6xl
                lg:text-7xl font-bold font-Pacifico">
                    <span className="text-primary font-cursive">SIKOPI</span> Adalah Harmoni Antara Teknologi & Seni Menyeduh <span className="text-primary font-cursive">KOPI</span>
                </h1>
                <div >
                  <a href="/menu">
                    <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full
                                        px-4 py-2 text-white hover:scale-105 duration-200">
                    Lihat Menu
                    </button>
                  </a>
                </div>
                
            </div>
            {/* Buat Menambahkan gambar */}
            <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
                    <img src={HeroImg}
                    alt=""
                    className="w-[450px] sm-w[550px] sm:scale-130 mx-auto spin"
                    />
                    <div className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl">
                    <h1>Hallo Costumer</h1>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl">
                    <h1>Best Coffee</h1>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}
