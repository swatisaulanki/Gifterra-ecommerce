import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaStar, FaGift, FaGlobeAsia } from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket className="text-pink-500 text-4xl" />,
    title: "Curating Since",
    value: "2025",
  },
  {
    icon: <FaStar className="text-pink-500 text-4xl" />,
    title: "15k+ Products",
    value: "Reviews",
  },
  {
    icon: <FaGift className="text-pink-500 text-4xl" />,
    title: "50+ New Arrivals",
    value: "Every Week",
  },
  {
    icon: <FaGlobeAsia className="text-pink-500 text-4xl" />,
    title: "6Lac+ Happy",
    value: "Customers",
  },
];

const StatsSection = () => {
  const scrollContainerRef = useRef(null);

  // Auto-scroll function for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3000); // Scroll every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 bg-white font-poppins">
      <div className="md:grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto px-4 hidden ">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-lg font-bold text-pink-500">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto ">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-4 w-max "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="min-w-[160px] flex-shrink-0 flex flex-col items-center gap-3"
            >
              <div className="hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="text-sm font-medium text-gray-600 text-center">{stat.title}</p>
              <p className="text-lg font-bold text-pink-500 text-center">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
