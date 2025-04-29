import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CollectionGrid from "./CollectionGrid";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 13);
    targetDate.setMinutes(targetDate.getMinutes() + 24);
    targetDate.setSeconds(targetDate.getSeconds() + 17);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 *13));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (difference > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
<>
<div className="relative bg-pink-300 overflow-hidden rounded-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Left Side: New Products + Image */}
      <div className="flex items-center gap-4 z-10">
        {/* Text */}
        <motion.div
          className="text-center md:text-left space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">New Products</h2>
          <p className="text-gray-600">Hurry up! Get the best deal at best price.</p>
        </motion.div>

        {/* Gift Image */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-uKIvRdXIn6vT8fdnqlYV-fck0Zksxat-g&s"
          alt="Gift Box"
          className="w-24 md:w-36 rounded-xl  md: h-36"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Middle Section: Countdown Timer */}
      <motion.div
        className="flex items-center gap-4 text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-pink-600">{timeLeft.days}</p>
          <p className="text-sm md:text-base text-gray-600">Days</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-pink-600">{timeLeft.hours}</p>
          <p className="text-sm md:text-base text-gray-600">Hours</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-pink-600">{timeLeft.minutes}</p>
          <p className="text-sm md:text-base text-gray-600">Minutes</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-pink-600">{timeLeft.seconds}</p>
          <p className="text-sm md:text-base text-gray-600">Seconds</p>
        </div>
      </motion.div>

      {/* Right Side: Shop Now Button */}
      <motion.button
        className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Shop Now
      </motion.button>
    </div>
    <CollectionGrid/>
</>
  );
};

export default CountdownBanner;
