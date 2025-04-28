import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/solid';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Here, you can integrate with an API to handle the form data.
    console.log(formData);
  };


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
  <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-16">
    
    {/* Left Side - Contact Info */}
    <div className="lg:w-5/12 w-full space-y-10">
      {/* Static Title */}
      <h2 className="text-4xl md:text-4xl font-bold mb-16 text-primary">
        Get In Touch
      </h2>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary flex items-center">
          <MapPinIcon className="h-6 w-6 mr-2 text-primary" /> Address:
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Gifterra Pvt. Limited</strong><br />
          Gondia, Maharashtra 441601
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary">Phone:</h3>
        <p className="text-gray-700">+91 7700043200</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary">Email:</h3>
        <p className="text-gray-700">gifterra@gmail.com</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary">Call Timing:</h3>
        <p className="text-gray-700">10:00 AM to 8:00 PM</p>
      </div>
    </div>

    {/* Right Side - Google Map */}
    <div className="lg:w-7/12 w-full rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        title="Rani Avanti Bai Lodhi Gondia Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.8858971976636!2d80.22097717405795!3d21.46219068016465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2ad8b5e25a7c2b%3A0xf54d8949dfdca52e!2sGondia%2C%20Maharashtra%20441014!5e0!3m2!1sen!2sin!4v1714216981165!5m2!1sen!2sin&markers=21.46219068016465,80.22097717405795"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px] md:h-[500px]"
      ></iframe>
    </div>

  </div>
</div>

<div className="max-w-3xl mx-auto px-4 py-8 font-poppins">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Contact Us</h1>
      <p className="text-lg text-center mb-8">
        Have any questions or need assistance? We’re here to help!
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg text-center mb-8">
          <p>Thank you for contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-900 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>

    </>
  );
};

export default ContactUs;
