import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppFloat = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "918378086293";
  const message = "Hi, I want to know more about Gifterra";
  const encodedMessage = encodeURIComponent(message);

  // Use only web.whatsapp.com for desktop to avoid api.whatsapp.com
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappURL = isMobile
    ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}` // still safe for mobile fallback
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showMessage && (
        <div className="bg-white text-gray-800 shadow-lg text-sm px-4 py-2 rounded-lg animate-bounce mb-1">
          How can I help you?
        </div>
      )}

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <BsWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
