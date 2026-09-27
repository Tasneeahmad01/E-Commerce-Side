 


import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Men',
    ImageUrl: 'https://media.istockphoto.com/id/1428047537/photo/handsome-man-in-gray-autumn-coat-outdoor-fashion-man-portrait.jpg?s=612x612&w=0&k=20&c=3KAAIFp4PfWzUB_wsDlfHDRNAfr2FITYDNsiuuEGWXM=',
    route: '/men'
  },
  {
    title: 'Women',
    ImageUrl: 'https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg',
    route: '/girls'
  },
  {
    title: 'Kids',
    ImageUrl: 'https://www.kidsfashioncare.com/wp-content/uploads/2024/07/kids-fashion-trends-2024.jpg',
    route: '/kids'
  }
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer my-8'>
      {categories.map((category, index) => (
        <div
          key={index}
          className='relative h-64 transform transition-transform duration-500 hover:scale-105 cursor-pointer rounded-lg overflow-hidden shadow-md'
          onClick={() => navigate(category.route)}
        >
          <img
            src={category.ImageUrl}
            alt={category.title}
            className='w-full h-full object-cover'
          />

          {/* Dark overlay for text readability */}
          <div className='absolute inset-0 bg-black bg-opacity-30'></div>

          {/* Text */}
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <p className='text-2xl font-serif font-bold text-white drop-shadow-lg'>
              {category.title}
            </p>
            <p className='text-green-400 font-semibold mt-1 drop-shadow-md'>
              View All →
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CategorySection;

