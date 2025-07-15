import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HomeSlider2 from "../components/HomeSlider2";
import ProductGrid from "../components/ProductGrid";
import SweetSurprises from "../components/SweetSurprises";
import CategorySlider from "../components/CategorySlider";
import GiftSlider from "../components/GiftSlider";
import Slider from "../components/Slider";
import WhatsAppFloat from "../components/WhatsAppFloat";
import StatsSection from "../components/StatsSection";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "For her",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33907_2.jpg?v=1741759916&width=1100",
    },
    {
      id: 2,
      name: "For Friends",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33908_3.jpg?v=1741760211&width=1100",
    },
    {
      id: 3,
      name: "For him",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33908_2.jpg?v=1741759916&width=1100",
    },
    {
      id: 4,
      name: "Fir couple",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33909_2.jpg?v=1741759916&width=1100",
    },
    {
      id: 5,
      name: "For kids",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33907_3.jpg?v=1741760211&width=1100",
    },
    {
      id: 6,
      name: "For familly",
      image:
        "https://lovecraftgift.com/cdn/shop/files/Frame_33909_3.jpg?v=1741760211&width=1100",
    },
  ];

  const categories = [
    {
      name: "Collection",
      img: "https://royceindia.com/cdn/shop/files/RedRosetteBox-SignatureRedGiftCollection.webp?v=1712058240",
    },
    {
      name: "Gift on Sale",
      img: "https://img.freepik.com/free-photo/black-friday-arrangement-red-background-with-copy-space_23-2148665558.jpg?semt=ais_hybrid&w=740",
    },
    {
      name: "Bottle",
      img: "https://homafy.com/wp-content/uploads/2023/10/Diwali-Cheers-Gift-Combo-Bottle-and-2-Glasses.jpg",
    },
    {
      name: "Couple",
      img: "https://m.media-amazon.com/images/I/61uZqg-h6OL.jpg",
    },
    {
      name: "Anniversary",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/showpiece-figurine/d/e/n/0-7-15-iph0572-1-key-impactgift-15-original-imagh57ftaucgcy5.jpeg?q=90&crop=false",
    },
    {
      name: "Birthday",
      img: "https://ocakes.in/storage/app/public/images/item/item-644a3ceba52b4.jpg",
    },
    {
      name: "Kids Zone",
      img: "https://media.istockphoto.com/id/991816670/photo/happy-kids-playing-in-ball-pit.jpg?s=612x612&w=0&k=20&c=L72_URZEuuBg1hzO_VhegzDOXGEHn1cvl5X8J7tFWWk=",
    },
    {
      name: "Corporate",
      img: "https://m.media-amazon.com/images/I/7178AGk9vAL.jpg",
    },
    {
      name: "T-shirt Corporate",
      img: "https://media.istockphoto.com/id/1285407854/photo/close-up-view-of-hands-of-unrecognizable-woman-giving-red-gift-box-tied-to-bow-handed-to-man.jpg?s=612x612&w=0&k=20&c=bZg2SVMYwQKbBSJlbwoDmkZ_9ypSalqx-2dP7eES0kw=",
      highlight: true,
    },
  ];

  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  // Detect mobile screens
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your needs
    };

    checkIfMobile(); // Check on mount
    window.addEventListener("resize", checkIfMobile); // Check on resize

    return () => window.removeEventListener("resize", checkIfMobile); // Clean up
  }, []);

  // Auto slide every 2 seconds for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % categories.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Scroll to active item (only if mobile)
  useEffect(() => {
    if (isMobile && containerRef.current) {
      const container = containerRef.current;
      const children = container.children;
      const activeItem = children[index];
      if (activeItem) {
        const offsetLeft =
          activeItem.offsetLeft -
          container.clientWidth / 2 +
          activeItem.clientWidth / 2;
        container.scrollTo({ left: offsetLeft, behavior: "smooth" });
      }
    }
  }, [index, isMobile]);

  const sliderContainerRef = useRef(null);

  // Auto-scroll effect (looping left to right)
  useEffect(() => {
    const slider = sliderContainerRef.current;
    let scrollStep = 1;

    const autoScroll = () => {
      if (slider) {
        slider.scrollLeft += scrollStep;
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 30); // Adjust speed here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <CategorySlider />
      <Slider />
      <GiftSlider />
      <div className="w-full bg-gradient-to-b from-[#1f0036] via-[#2a0b4a] to-[#1f0036] px-4 py-16 font-poppins">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white  mb-12 tracking-wide">
          🛍️ Top <span className="text-purple-400">Selling</span> Products
        </h2>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6">
          {/* Bottle Card */}
          <div className="flex-1 bg-gradient-to-br from-[#9a1894] to-[#61053b] p-10 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-6 left-6 text-white text-2xl">✨</div>
            <div className="absolute top-12 right-10 text-white text-xl">
              ⭐
            </div>

            <h3 className="text-lg md:text-xl text-white/90 font-semibold tracking-wider">
              Personalized
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white my-2">
              Bottle
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Eco-Friendly & BPA-Free <br className="hidden md:block" />
              for a Healthier You
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-purple-800 font-bold rounded-full hover:shadow-purple-500/50 hover:scale-105 transition duration-300">
              Shop Now
            </button>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgw_b0ksiSDasOkJJCPfAA0ApKnrscYT0GA&s"
              alt="Bottle"
              className="w-40 md:w-[100%]  rounded-2xl mt-10 z-10"
            />
          </div>

          {/* Kinder Joy Card */}
          <div className="flex-1 bg-gradient-to-br from-[#ff6a3d] to-[#ff9248] p-10 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-6 right-6 text-white text-xl">🌟</div>
            <div className="absolute bottom-10 left-6 text-white text-2xl">
              ✨
            </div>

            <h3 className="text-lg md:text-xl text-white/90 font-semibold tracking-wider">
              Customized
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white my-2">
              Kinder <span className="block md:inline">Joy</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Eco-Friendly & BPA-Free <br className="hidden md:block" />
              for a Healthier You
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-orange-600 font-bold rounded-full hover:shadow-orange-300/60 hover:scale-105 transition duration-300">
              Shop Now
            </button>
            <img
              src="https://i.ytimg.com/vi/Xn6Zg6IYIhs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMwWXFbjXMKUm3Z8H2P27kcO-XAQ"
              alt="Kinder Joy"
              className="w-40 md:w-[90%]  rounded-2xl mt-10 z-10"
            />
          </div>
        </div>
      </div>

      <section className="relative w-full bg-gradient-to-br from-[#c7c2c2] via-[#0b0b0b] to-[#151415] overflow-hidden rounded-b-[80px] shadow-inner">
        {/* Decorative glow orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-20 right-0 w-48 h-48 bg-yellow-100 opacity-30 blur-2xl rounded-full z-0" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 relative z-10">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h4 className="text-md md:text-lg text-gray-200 font-semibold uppercase tracking-widest">
              Top Selling
            </h4>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight drop-shadow-sm">
              Personalized Rose
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-md">
              A touch of nature, personally yours. Eco-friendly & BPA-free to
              make your gifting healthier & sustainable.
            </p>

            <button className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
            <img
              src="https://st2.depositphotos.com/4155699/6143/i/450/depositphotos_61431315-stock-photo-offering-a-red-rose.jpg"
              alt="Rose"
              className="w-[300px] rounded-full md:w-[380px] object-contain drop-shadow-xl"
            />

            {/* Floating text (e.g., names) */}
            <span className="absolute top-[30%] left-[60%] rotate-[10deg] text-white text-sm md:text-md font-semibold drop-shadow-md">
              krush
            </span>
            <span className="absolute bottom-[15%] left-[45%] rotate-[12deg] text-white text-sm md:text-md font-semibold drop-shadow-md">
              swatu
            </span>
          </div>
        </div>
      </section>

      <div className="w-full bg-white py-5 shadow-md border-t border-b border-gray-100">
        <div className="w-full overflow-hidden px-4">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] 
                transition-transform duration-300 hover:scale-105 relative ${
                  cat.highlight
                    ? "bg-gradient-to-br from-yellow-100 to-red-100 rounded-xl shadow-lg p-3"
                    : ""
                }`}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 
    object-cover rounded-2xl border-4 p-1
    ${cat.highlight ? "border-yellow-500 shadow-lg" : "border-primary"}
    transition-transform duration-300 ease-in-out hover:scale-105
  `}
                />

                <p
                  className={`mt-2 text-xs sm:text-sm font-semibold ${
                    cat.highlight ? "text-yellow-800" : "text-gray-800"
                  } text-center`}
                >
                  {cat.name}
                </p>
                {cat.highlight && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-xs px-2 py-0.5 rounded-bl-lg rounded-tr-md text-white font-bold shadow-md">
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl group transition-all duration-500 hover:scale-105 hover:shadow-primary animate-slideUp">
        {/* Floating Background Elements */}
        <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-primary opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-40px] right-[-40px] w-52 h-52 bg-secondary opacity-10 rounded-full animate-pulse"></div>

        {/* Left Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://jamescressflorist.com/cdn/shop/products/3adc6d473b9d414d28bc216a246a7786.jpg"
            alt="Gift"
            className="w-56 md:w-72 rounded-full object-contain transform transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
          />
        </div>

        {/* Center Text */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <p className="text-primary text-xl font-semibold font-poppins tracking-wide animate-pulse">
            Bank Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-bebasNeue text-dark leading-tight">
            Get <span className="text-primary">up to 5% off</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins">
            Use your <span className="font-bold text-dark">Debit Card</span> and
            enjoy exclusive benefits.
          </p>

          {/* HDFC Logo */}
          <div className="mt-8 flex justify-center md:justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
              alt="HDFC Bank"
              className="w-44 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Right Wallet Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://media.istockphoto.com/id/1044799820/photo/woman-shopping-online-and-paying-with-a-credit-card-from-the-wallet-copy-space.jpg?s=612x612&w=0&k=20&c=FOGP9OwXuJ-7Jy8wP6CwTSAK0TC3ARQ2msKvm813AfY="
            alt="Wallet"
            className="w-52 md:w-64 rounded-lg object-contain transform transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
          />
        </div>
      </div>

      <section className="w-full bg-white py-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Kids Special</h2>
          <p className="text-gray-500 mt-2">Where Fun Meets Creativity!</p>
        </div>

        <motion.div
          className="relative w-full bg-pink-400 rounded-3xl overflow-hidden px-4 md:px-16 py-10 flex flex-col lg:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.h3
              className="text-4xl font-bold text-white mb-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Kids Bag
            </motion.h3>
            <motion.p
              className="text-white text-lg mb-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Cute, Comfy & Fun to Carry!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-500 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition-all"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Decorative Dotted Line (optional) */}
          <div className="hidden lg:block absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="200" height="50">
              <path
                d="M 0 25 Q 50 0, 100 25 T 200 25"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          {/* Image Section with Animation */}
          <motion.div
            className="flex-1 mt-8 lg:mt-0 z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://hips.hearstapps.com/hmg-prod/images/full-school-backpack-isolated-on-pink-background-royalty-free-image-988445774-1564069074.jpg?crop=0.668xw:1.00xh;0.280xw,0&resize=1200:*"
              alt="Kids Lion Bag"
              className="w-[250px] mx-auto  rounded-full lg:mx-0 transition-all duration-300"
            />
          </motion.div>

          {/* Discount Badge with Bounce Animation */}
          <motion.div
            className="absolute top-6 right-6 bg-white text-pink-500 px-5 py-3 rounded-2xl text-center shadow-lg z-10"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <p className="text-3xl font-bold">10%</p>
            <p className="text-xl font-medium">Off</p>
          </motion.div>

          {/* Background Wave */}
          <div className="absolute bottom-0 left-0 w-full z-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto">
              <path
                fill="#fcb2b2"
                fillOpacity="1"
                d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,106.7C672,107,768,117,864,112C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              ></path>
            </svg>
          </div>
        </motion.div>
      </section>

      <HomeSlider2 />
      <ProductGrid />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 ">
          For Every Relationship
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <StatsSection/>


      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12 bg-gray-100">
        {/* Watch Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://lovecraftgift.com/cdn/shop/files/akls.jpg?v=1741761055"
            alt="Personalized Watch"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Gift Set Section */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://lovecraftgift.com/cdn/shop/files/akls_1.jpg?v=1741761055"
            alt="Personalized Gift Set"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <SweetSurprises />
      <WhatsAppFloat/>
    </>
  );
};

export default Home;
