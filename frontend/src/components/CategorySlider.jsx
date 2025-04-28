import { useEffect, useRef, useState } from "react";

const categories = [
  { name: "Collection", img: "https://royceindia.com/cdn/shop/files/RedRosetteBox-SignatureRedGiftCollection.webp?v=1712058240" },
  { name: "Gift on Sale", img: "https://img.freepik.com/free-photo/black-friday-arrangement-red-background-with-copy-space_23-2148665558.jpg?semt=ais_hybrid&w=740" },
  { name: "Bottle", img: "https://homafy.com/wp-content/uploads/2023/10/Diwali-Cheers-Gift-Combo-Bottle-and-2-Glasses.jpg" },
  { name: "Couple", img: "https://m.media-amazon.com/images/I/61uZqg-h6OL.jpg" },
  { name: "Anniversary", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/showpiece-figurine/d/e/n/0-7-15-iph0572-1-key-impactgift-15-original-imagh57ftaucgcy5.jpeg?q=90&crop=false" },
  { name: "Birthday", img: "https://ocakes.in/storage/app/public/images/item/item-644a3ceba52b4.jpg" },
  { name: "Kids Zone", img: "https://media.istockphoto.com/id/991816670/photo/happy-kids-playing-in-ball-pit.jpg?s=612x612&w=0&k=20&c=L72_URZEuuBg1hzO_VhegzDOXGEHn1cvl5X8J7tFWWk=" },
  { name: "Corporate", img: "https://m.media-amazon.com/images/I/7178AGk9vAL.jpg" },
  {
    name: "T-shirt Corporate",
    img: "https://media.istockphoto.com/id/1285407854/photo/close-up-view-of-hands-of-unrecognizable-woman-giving-red-gift-box-tied-to-bow-handed-to-man.jpg?s=612x612&w=0&k=20&c=bZg2SVMYwQKbBSJlbwoDmkZ_9ypSalqx-2dP7eES0kw=",
    highlight: true,
  },
];

const CategorySlider = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto slide every 0.5 second for faster speed (50% faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 500); // 500 ms = 0.5 second (faster speed)
    return () => clearInterval(interval);
  }, []);

  // Scroll to active item with faster left-to-right scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const children = container.children;
      const activeItem = children[index];
      if (activeItem) {
        const offsetLeft = activeItem.offsetLeft - container.clientWidth / 2 + activeItem.clientWidth / 2;
        container.scrollTo({ left: offsetLeft, behavior: "smooth" });
      }
    }
  }, [index]);

  return (
    <div className="w-full bg-white py-5 shadow-md border-t font-poppins border-b border-gray-100">
      <div className="w-full overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] 
                transition-all duration-500 hover:scale-110 relative 
                ${cat.highlight ? "bg-gradient-to-br from-yellow-100 to-red-200 rounded-xl shadow-xl p-4" : "bg-gray-100 rounded-lg shadow-md p-4"}`}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className={`w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-40 lg:w-32 lg:h-48 rounded-lg object-cover 
                ${cat.highlight ? "shadow-xl opacity-90 hover:opacity-100" : "opacity-80 hover:opacity-90"}`}
              />
              <p
                className={`mt-2 text-xs sm:text-sm font-semibold ${cat.highlight ? "text-yellow-800" : "text-gray-800"} text-center`}
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
  );
};

export default CategorySlider;
