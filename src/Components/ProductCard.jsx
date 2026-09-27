import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 text-center'>
      
      <img
        src={product.image}
        alt={product.name}
        className='w-full h-40 object-contain rounded mb-4'
      />

      <h3 className='text-lg font-semibold'>
        {product.name}
      </h3>
      <span className='text-gray-500'>{product.description}</span>
      <p className='text-gray-500 font-medium'>
        ${product.price}
      </p>

      <div className='flex items-center justify-between mt-2'>
  
        <div className='flex'>
          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
          <FaStar className='text-yellow-500'/>
        </div>

        <div
          onClick={handleAddToCart}
          className='flex items-center justify-center bg-red-600 text-white rounded-full cursor-pointer hover:bg-red-700 group px-3 py-1 transition-all'
        >
          <span className='group-hover:hidden font-bold'>+</span>
          <span className='hidden group-hover:block whitespace-nowrap'>Add to Cart</span>
        </div>

      </div>

    </div>
  )
}

export default ProductCard;


