import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../public/images/coffee-footer.jpg";
import { GiCoffeeCup } from "react-icons/gi";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
export default function Footer() {
  return (
    <div style={bgImage} className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <div
              data-aos="fade-down" 
              data-aos-once="true"
              data-aos-delay="300"
              className="flex text-2xl text-white font-cursive cursor-pointer">
              <GiCoffeeCup className="size-9 mr-2"/><h1 className="mt-2 text-2xl text-white font-cursive cursor-pointer">SIKOPI</h1>
            </div>
            <p className="font-semibold">
              Sistem Informasi Kopi Online <br/>
              dan Pemesanan Instan
            </p>
            <p className="pt-4">
              Kopi Spesial, Nuansa Nyaman, Momen Tak Terlupakan – Pilih lah kopi terbaikmu di SIKOPI
            </p>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full">
              Kunjungi saluran YouTube kami
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Semarang, UNIMUS</p>
                <p>+62 1234567890</p>
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com">
                    <FaInstagram className="text-3xl hover:text-black duration-300" />
                  </a>
                  <a href="https://www.facebook.com">
                    <FaFacebook className="text-3xl hover:text-black duration-200" />
                  </a>
                  <a href="https://www.linkedin.com">
                    <FaLinkedin className="text-3xl hover:text-black duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}