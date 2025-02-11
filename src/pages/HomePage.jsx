import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import Product1 from "../assets/images/product-1.jpg";
import Product2 from "../assets/images/product-2.jpg";
import Product3 from "../assets/images/product-3.jpg";
import Product4 from "../assets/images/product-4.jpg";
import Product5 from "../assets/images/product-5.jpg";

const HomePage = () => {
  return (
    <div className="homePage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Ngopi dulu, urusan besok
              <span className="font-bold text-lime-500"> Kasihjalan </span>
              aja!
            </h1>
            <p className="text-base/8 mb-7">
              Hidup ini kadang ribet, kadang santai. Tapi satu yang pasti: kopi selalu setia. Di Kasihjalan,
              kami nggak cuma jual kopi, tapi juga nawarin tempat buat ngendurin urat, nguatin tekad, atau
              sekadar kabur dari kejaran deadline. Sini, seruput dulu—urusan lain bisa dipikir belakangan.
            </p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-18" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              About
              <span className="font-bold text-lime-500"> Kasihjalan.</span>
            </h1>
            <p className="text-base/loose">
              Dulu, kami percaya bahwa kopi bisa menyelesaikan banyak masalah. Sekarang, kami lebih yakin
              kalau kopi nggak cuma nyelesain masalah, tapi juga bikin yang nggak ada masalah jadi makin
              happy. Berangkat dari mimpi dan sedikit kenekatan, Kasihjalan. hadir buat jadi tempat di mana
              cerita ngalir bareng espresso, tawa melebur di atas cappuccino, dan inspirasi lahir dari tiap
              tetes manual brew.
            </p>
            <p className="text-base/loose text-lime-500 font-bold">
              Kami bukan sekadar warung kopi, kami adalah pelarian terbaik dari realitas yang membosankan.
            </p>
          </div>
        </div>

        <div className="Fasilitas pt-18" id="facilities">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">Fasilitas</h1>
          <p className="text-center">
            Kami tahu, orang datang ke warung kopi bukan cuma buat ngopi. Kadang buat kerja, kadang buat nyusun
            rencana besar, kadang buat sekadar menikmati suasana. Tenang, kita siap sedia!
          </p>
          <div className="facility-box pt-12 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Ruang Indoor & Outdoor</h3>
              <p className="text-white text-base/tight">
                Mau kerja serius atau ngobrol ngalor-ngidul? Bebas!.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Wi-Fi Gratis</h3>
              <p className="text-white text-base/tight">
                Biar browsing lancar, entah buat cari tugas, inspirasi, atau sekadar hiburan.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Stop Kontak Berlimpah</h3>
              <p className="text-white text-base/tight">
                Karena gadget mati lebih nyebelin daripada kehabisan kopi.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-4 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Live Music & Event</h3>
              <p className="text-white text-base/tight">
                Hidup terlalu pendek buat nggak menikmati musik dan kopi bersamaan.
              </p>
            </div>
          </div>
        </div>

        <div className="products pt-32" id="products">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">Produk</h1>
          <p className="text-center">
            Kopi di sini bukan sembarang kopi. Kami nyeduhnya pake cinta, niat, dan sedikit harapan
            biar kamu balik lagi. Coba aja:
          </p>
          <div className="product-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Product1} alt="Product Image" className="w-full h-[450px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Product 1</h3>
              <p>Sit anim dolore elit pariatur anim consectetur sit amet sit ad veniam irure.</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Product2} alt="Product Image" className="w-full h-[450px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Product 2</h3>
              <p>Sit anim dolore elit pariatur anim consectetur sit amet sit ad veniam irure.</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Product3} alt="Product Image" className="w-full h-[450px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Product 3</h3>
              <p>Sit anim dolore elit pariatur anim consectetur sit amet sit ad veniam irure.</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Product4} alt="Product Image" className="w-full h-[450px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Product 4</h3>
              <p>Sit anim dolore elit pariatur anim consectetur sit amet sit ad veniam irure.</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={Product5} alt="Product Image" className="w-full h-[450px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Product 5</h3>
              <p>Sit anim dolore elit pariatur anim consectetur sit amet sit ad veniam irure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage
