import React from 'react';
import { Link } from 'react-router-dom';

const fashionCategories = [
  {
    title: "Men's Fashion",
    description: "Shirts, Jeans, Jackets aur zyada",
    image: "https://media.istockphoto.com/id/1428047537/photo/handsome-man-in-gray-autumn-coat-outdoor-fashion-man-portrait.jpg?s=612x612&w=0&k=20&c=3KAAIFp4PfWzUB_wsDlfHDRNAfr2FITYDNsiuuEGWXM=",
    link: "/men"
  },
  {
    title: "Women's Fashion",
    description: "Dresses, Tops, Kurtas aur zyada",
    image: "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg",
    link: "/women"
  },
  {
    title: "Girls Fashion",
    description: "Trendy styles for girls",
    image: "https://www.kidsfashioncare.com/wp-content/uploads/2024/07/kids-fashion-trends-2024.jpg",
    link: "/girls"
  }
];

const Fashion = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Fashion</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {fashionCategories.map((cat, index) => (
          <Link to={cat.link} key={index}>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <h2 className="text-white text-xl font-bold">{cat.title}</h2>
                <p className="text-gray-200 text-sm">{cat.description}</p>
                <span className="text-green-400 font-semibold mt-1">View All →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
