import { motion } from "framer-motion";

const collections = [
  { id: 1, title: "Kids Zone", items: 111, image: "https://lovecraftgift.com/cdn/shop/files/01_65f4f3c6-2234-40b0-bb63-42cca27f5095.jpg?v=1741769739&width=2000" },
  { id: 2, title: "Ghibli Art", items: 8, image: "https://lovecraftgift.com/cdn/shop/files/Personalized_Ghibli_Art_Style_Frame_-_Custom_Ghibli_Artwork_for_Your_Photos.jpg?v=1743242509&width=2000" },
  { id: 3, title: "Mini Décor Creatives", items: 11, image: "https://lovecraftgift.com/cdn/shop/files/Happy_Face_Cup_2.jpg?v=1744873205&width=2000" },
  { id: 4, title: "Car Hanger", items: 5, image: "https://lovecraftgift.com/cdn/shop/files/2_24.jpg?v=1744356393&width=2000" },
  { id: 5, title: "Panda Lamp", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/19_7bbc98e5-66ac-43b7-960c-1a98c3fe4776.jpg?v=1704948467&width=2000" },
  { id: 6, title: "Coustmized Pens", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/27def0dd78e597803e3702b556caf1a0.jpg?v=1682615772&width=2000" },
  { id: 7, title: "Raksha bandhan", items: 13, image: "https://lovecraftgift.com/cdn/shop/files/1_3514dbed-0108-488f-aa8b-4a15930015fc.jpg?v=1720451195&width=2000" },
  { id: 8, title: "Bottle", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/bd0212491dfa634d3a2eb1fca9766ced.jpg?v=1742531945&width=2000" },
  { id: 9, title: "Corporative Gifts", items: 13, image: "https://lovecraftgift.com/cdn/shop/files/hgfjd.jpg?v=1740641636&width=2000" },
  { id: 10, title: "Shadow Box", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/68_16a93c8b-0dad-4557-99fd-328e7a4b6b3e.jpg?v=1742540796&width=2000" },
  { id: 11, title: "Mug", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/Maic-Mug.gif?v=1688707218&width=2000" },
  { id: 12, title: "Wedding", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/5.jpg?v=1670846645&width=2000" },
  { id: 13, title: "Talking Heart", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/23.jpg?v=1684241817&width=2000" },
  { id: 14, title: "Frames", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/11.jpg?v=1687521221&width=2000" },
  { id: 15, title: "Wooden Hanger", items: 13, image: "https://lovecraftgift.com/cdn/shop/collections/e97c8c4e2e0c25b5258edef7721128d7.jpg?v=1656345511&width=2000" },


];


// Even if you have more items, we will **only display 20**
const visibleCollections = collections.slice(0, 20);

const CollectionGrid = () => {
  return (
    <div className="px-6 md:px-8 py-10 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Collections</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {visibleCollections.map((collection) => (
          <motion.div
            key={collection.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center p-4">
              <h3 className="text-lg font-semibold">{collection.title}</h3>
              <p className="text-gray-500 text-sm">{collection.items} items</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
