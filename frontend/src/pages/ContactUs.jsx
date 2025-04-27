import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <>
<div className="relative w-full h-[60vh]  md:h-[60vh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="https://img.freepik.com/premium-photo/man-showing-contact-symbols-social-media-internet_220873-7127.jpg?semt=ais_hybrid&w=740" 
    alt="Contact Background" 
    className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative text-center text-white px-2 py-2" // Adjust padding for better spacing
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Contact Us
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      Questions? Comments? Let your customers get in touch with you by filling out the email form below. 
      Reassure them that someone will get back to them within a certain timeframe.
    </p>
  </motion.div>
</div>


    <div className="flex flex-col items-center justify-center px-4 py-16 md:px-20 lg:px-32 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      
      {/* Title */}
      {/* Main Content */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Side - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-5/12 w-full space-y-10"
        >
          <div className="space-y-2">
          <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-4xl font-bold mb-16  text-blue-900"
      >
        Get In Touch
      </motion.h2>


            <h3 className="text-2xl font-semibold text-blue-800">Address:</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Gifterra Pvt. Limited</strong><br />
              Gondia, Maharashtra 441601
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-800">Phone:</h3>
            <p className="text-gray-700">+91 7700043200</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-800">Email:</h3>
            <p className="text-gray-700">gifterra@gmail.com</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-800">Call Timing:</h3>
            <p className="text-gray-700">10:00 AM to 8:00 PM</p>
          </div>
        </motion.div>

        {/* Right Side - Google Map */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-7/12 w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            title="Gondia Maharashtra Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.8858971976636!2d80.22097717405795!3d21.46219068016465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ad8b5e25a7c2b%3A0xf54d8949dfdca52e!2sGondia%2C%20Maharashtra%20441014!5e0!3m2!1sen!2sin!4v1714216981165!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </motion.div>

      </div>
    </div>

    </>
  );
};

export default ContactUs;
