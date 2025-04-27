import React from "react";

const blogs = [
  {
    id: 1,
    title: "4 Hot Holiday & New Year Gift Suggestions",
    author: "Swatiskrush",
    date: "jan 2 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ygaj9NRnWME0SZlRajv3jcUH2haNvbjj9RhuHuZcCa3avT0_QJLEVrBZSkZy1LQaurs&usqp=CAU", // replace with your images
    link: "/blog/holiday-newyear-gifts",
  },
  {
    id: 2,
    title: "Brighten Up Your Home With 3D Acrylic Lamps On This New Year",
    author: "Swati",
    date: "jan 1 2025",
    image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-169762,resizemode-75,msid-116791517/news/new-updates/happy-new-year-2025-wishes-here-are-top-50-messages-and-quotes-you-can-send-to-your-friends-and-loved-ones.jpg",
    link: "/blog/acrylic-lamps-newyear",
  },
  {
    id: 3,
    title: "Best Teacher's Day Gift",
    author: "Krush",
    date: "Sep 01 2024",
    image: "https://lovecraftgift.com/cdn/shop/articles/1.jpg?v=1671281223&width=750",
    link: "/blog/teachers-day-gift",
  },
];

const BlogPage = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home &gt; <span className="text-gray-700 font-medium">Blog</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-[#092D4C]">Blog</h1>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {[
          "All articles",
          "3d illusion lights",
          "Acrylic Lamps",
          "chinese new year gifts",
          "Crafts & Gifts",
          "Gift",
          "gift for teacher",
          "LOve",
          "lunar new year gifts",
          "new year",
          "new year 2023",
          "new year gift for best friend",
          "new year gifts for boyfriend",
          "new year gifts for employees",
          "new year gifts for family",
          "new year gifts for friends",
          "new year gifts ideas",
          "new year's gift ideas",
          "new years gifts",
          "personalised new year gifts",
          "Teachers Day",
          "Valentine",
          "Valentine Day 2023",
        ].map((tag, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm ${
              tag === "All articles"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                By {blog.author} on {blog.date}
              </p>
              <a
                href={blog.link}
                className="inline-block mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 text-sm"
              >
                Read Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
