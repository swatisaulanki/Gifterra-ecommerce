import React from 'react';

const items = [
  { title: "Bouquet", icon: "💐" },
  { title: "Shadow Box", icon: "🧸" },
  { title: "3D Lamp", icon: "💡" },
  { title: "Wall Clock", icon: "🕰️" },
  { title: "Mosaic Frame", icon: "🖼️" },
  { title: "Rotating Lamp", icon: "🛋️" },
  { title: "Wooden Tree", icon: "🌳" },
  { title: "LED Painting", icon: "🎨" },
  { title: "Star Map", icon: "🧭" },
  { title: "Keychain", icon: "🔑" },
  { title: "Jewellery", icon: "💎" },
  { title: "Corporate", icon: "🏢" },
  { title: "Spotify", icon: "🎵" },
  { title: "Handmade", icon: "🖐️" },
  { title: "Home", icon: "🏡" },
  { title: "T-shirts", icon: "👕" },
  { title: "Mug", icon: "☕" },
  { title: "Notebook", icon: "📓" },
];

const SweetSurprises = () => {
  return (
    <div className=" md:h-[600px] bg-white p-8 font-poppins">
      <h1 className="text-3xl font-bold mb-8">Sweet Surprises</h1>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-pink-50 rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">{item.icon}</div>
            <div className="text-lg font-medium text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetSurprises;
