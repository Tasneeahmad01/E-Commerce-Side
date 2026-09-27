 

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';

// const ProductDetail = () => {
//   const { state } = useLocation(); 
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [selectedSize, setSelectedSize] = useState(null);

//   const product = state?.product;

//   if (!product) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen gap-4">
//         <p className="text-xl text-gray-500">Product not found!</p>
//         <button
//           onClick={() => navigate('/women')}
//           className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
//         >
//           ← Back to Women
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">

//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 flex items-center gap-2 text-gray-500 hover:text-black transition font-medium"
//       >
//         ← Back
//       </button>

//       {/* Product Card */}
//       <div className="flex flex-col md:flex-row gap-10 bg-white border rounded-2xl shadow-lg p-3">

//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full md:w-96 h-[450px] object-cover rounded-xl"
//         />

//         {/* Details */}
//         <div className="flex flex-col gap-4 flex-1">

//           <h1 className="text-3xl font-semibold">{product.title}</h1>
//           <p className="text-gray-500 uppercase tracking-wider text-[20px] font-medium">
//             {product.brand} {product.category}
//           </p>

//           <hr />

//           <p className="text-3xl font-semibold text-black">₹ {product.price}</p>

//           {/* Size Selection */}
//           {/* Size Selection */}
// <div>
//   <h2 className="text-lg font-semibold uppercase mb-3">
//     SELECT SIZE
//   </h2>
//   <div className="flex gap-3 flex-wrap">
//     {product.sizes?.map((size) => (
//       <button
//         key={size}
//         onClick={() => setSelectedSize(size)}
//         className={`w-12 h-12 rounded-[20px] border text-sm font-medium transition
//           ${selectedSize === size
//             ? 'text-pink-500 border-pink-500'
//             : 'border-gray-300 hover:border-pink-500'
//           }`}
//       >
//         {size}
//       </button>
//     ))}
//   </div>
// </div>

// <div className="flex gap-3 mt-4">
//   <button
//     className="flex-1 border border-gray-300 rounded-xl px-2 py-2 font-semibold text-lg
//                hover:bg-pink-500 hover:text-white transition cursor-pointer"
//     onClick={() => {
//       if (!selectedSize) {
//         alert('Please select a size!');
//         return;
//       }
//       dispatch(addToCart({ ...product, selectedSize }));
//       navigate(-1);
//     }}
//   >
//     ADD TO CART
//   </button>

//   <button
//     className="flex-2 border border-gray-300 rounded px-8 py-3
//                hover:bg-red-500 hover:text-white hover:border-red-500 transition font-semibold text-lg"
//   >
//     <span className='pl-5'>♡</span> WISHLIST
//   </button>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = state?.product;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-xl text-gray-500">Product not found!</p>
        <button
          onClick={() => navigate('/women')}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          ← Back to Women
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-black transition font-medium"
      >
        ← Back
      </button>

      {/* Product Card */}
      <div className="flex flex-col md:flex-row gap-10 bg-white border rounded-2xl shadow-lg p-3 w-10/10">

        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-96 h-[450px] object-cover rounded-xl"
        />

        {/* Details */}
        <div className="flex flex-col gap-4 flex-1">

          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 uppercase tracking-wider text-[20px] font-medium">
            {product.brand} {product.category}
          </p>

          <hr />

          <p className="text-3xl font-semibold text-black">₹ {product.price}</p>

          {/* Size Selection */}
          <div>
            <h2 className="text-lg font-semibold uppercase mb-3">
              SELECT SIZE
            </h2>
            <div className="flex gap-3 flex-wrap">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-[20px] border text-sm font-medium transition
                    ${selectedSize === size
                      ? 'text-pink-500 border-pink-500'
                      : 'border-gray-300 hover:border-pink-500'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-2 py-3 font-semibold text-lg hover:bg-pink-500 hover:text-white transition cursor-pointer"
              onClick={() => {
                if (!selectedSize) {
                  alert('Please select a size!');
                  return;
                }
                dispatch(addToCart({ ...product, selectedSize }));
                navigate(-1);
              }}
            >
              🛒 ADD TO CART
            </button>

            <button
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-1 py-1 font-semibold text-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition cursor-pointer"
            >
              <span className='text-4xl'>♡</span> WISHLIST
            </button>
          </div>
<hr />
          <div className="flex flex-col gap-3 p-4">
  
  {/* Heading */}
  <h2 className="text-lg font-semibold uppercase flex items-center gap-2">
    🚌 DELIVERY OPTIONS
  </h2>

  {/* <hr /> */}

  {/* Pincode Input */}
  <div className="flex items-center gap-2">
    <input
      type="text"
      placeholder="Enter PinCode"
      className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-48 focus:outline-none focus:border-pink-400 transition"
    />
    <button className="bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 transition">
      Check
    </button>
  </div>

  {/* Info Text */}
  <p className="text-xs text-gray-700">
    Please enter PIN code to check delivery time & Pay on Delivery availability
  </p>

  {/* <hr /> */}

  {/* Features */}
  <ul className="flex flex-col gap-2 text-[16px] text-black">
    <li className="flex items-center gap-2">
       100% Original Products
    </li>
    <li className="flex items-center gap-2">
       Pay on Delivery might be available
    </li>
    <li className="flex items-center gap-2">
      Easy 14 days returns and exchanges
    </li>
  </ul>
<div>
  <h1>BEST OFFERS</h1>
</div>
</div>
        </div>      
      </div>
    </div>
  );
};

export default ProductDetail;