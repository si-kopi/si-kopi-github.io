import '../App.css';

export default function Kontak() {
  return (
    <section className="items-center contact py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Contact <span className="text-primary"> Us </span>
          </h2>
          <p className="text-gray-600 mt-4">
            Berikan pendapat anda tentang SIKOPI
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="title mb-6">
              <h3 className="text-xl font-semibold">Contact detail</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor</p>
            </div>
            <div className="content">
              <div className="info mb-6">
                <i className="fas fa-mobile-alt text-2xl text-teal-800 mr-4"></i>
                <h4 className="text-sm font-bold">
                  PHONE :<br/>
                  <span className="text-gray-600">+12457836913 , +12457836913</span>
                </h4>
              </div>
              <div className="info mb-6">
                <i className="far fa-envelope text-2xl text-teal-800 mr-4"></i>
                <h4 className="text-sm font-bold">
                  EMAIL :<br/>
                  <span className="text-gray-600">sikopi@gmail.com</span>
                </h4>
              </div>
              <div className="info">
                <i className="fas fa-map-marker-alt text-2xl text-teal-800 mr-4"></i>
                <h4 className="text-sm font-bold">
                  ADDRESS :<br/>
                  <span className="text-gray-600">UNIMUS , Abcd, Xyz</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <form>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 pr-2">
                  <input type="text" className="form-control p-4 mb-4 border rounded-lg w-full" placeholder="Name"/>
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <input type="email" className="form-control p-4 mb-4 border rounded-lg w-full" placeholder="Email"/>
                </div>
                <div className="w-full">
                  <input type="text" className="form-control p-4 mb-4 border rounded-lg w-full" placeholder="Subject"/>
                </div>
              </div>
              <div className="form-group mb-6">
                <textarea className="form-control p-4 border rounded-lg w-full" rows="5" id="comment" placeholder="Message"></textarea>
              </div>
              <button className="btn bg-primary text-white py-3 px-6 rounded-lg" type="submit">KIrim!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
