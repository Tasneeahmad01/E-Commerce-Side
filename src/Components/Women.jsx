// import React, { useState } from 'react';
// import womenproductcategory from './WomenProduct';
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";

// const Women = () => {
//   const dispatch = useDispatch();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [openProduct,setOpenProduct]=useState(null);
//   const filteredProducts = womenproductcategory.filter(item => {
//     return (
//       (selectedCategory ? item.category === selectedCategory : true) &&
//       (selectedBrand ? item.brand === selectedBrand : true)
//     );
//   });

//   return (
//     <div className="flex flex-col md:flex-row">

//       {/* LEFT SIDEBAR */}
//       <div className="w-full md:w-60 lg:w-64 
//                       p-4 border-b md:border-b-0 md:border-r 
//                       md:sticky md:top-0 md:h-screen 
//                       ">

//         <h2 className="font-bold text-lg mb-3">FILTER</h2>

//         {/* CATEGORY */}
//         <div className="border-b pb-3 mb-3">
//           <h2 className="font-semibold mb-2">CATEGORIES</h2>

//           {["Dresses","Tops","Tshirts","Trouser","Shirts","Jeans"].map((cat) => (
//             <label key={cat} className="flex items-center gap-2 cursor-pointer py-1">
//               <input 
//                 type="checkbox"
//                 checked={selectedCategory === cat}
//                 onChange={() => setSelectedCategory(cat)}
//               />
//               <span>{cat}</span>
//             </label>
//           ))}
//         </div>

//         {/* BRAND */}
//         <div>
//           <h2 className="font-semibold mb-2">BRAND</h2>

//           {["StyleCast","LULU & SKY","Trendyol","Roadster","DressBerry","StyleCast x Revolte","Moda Rapido"].map((brand) => (
//             <label key={brand} className="flex items-center gap-2 cursor-pointer py-1">
//               <input 
//                 type="checkbox"
//                 checked={selectedBrand === brand}
//                 onChange={() => setSelectedBrand(brand)}
//               />
//               <span>{brand}</span>
//             </label>
//           ))}
//         </div>

//       </div>

//       {/* PRODUCTS */}
//       <div className="flex-1 p-4 
//                       grid 
//                       grid-cols-1 
//                       sm:grid-cols-2 
//                       md:grid-cols-3 
//                       lg:grid-cols-4 
//                       gap-4">

//         {filteredProducts.map((item) => (
//           <div 
//             key={item.id} 
//             className="border rounded-lg 
//                        p-1 
//                        hover:shadow-md 
//                        transition 
//                        flex flex-col cursor-pointer"
//   onClick={()=>setOpenProduct(openProduct===item.id?null:item.id)}>
//             <img 
//               src={item.image}
//               alt={item.title}
//               className="w-full h-60 object-cover rounded"
//             />

//             <h1 className="font-semibold mt-2 text-bold pl-2 ">
//               {item.title}
//             </h1>

//             {/* <p className="text-sm text-gray-600 line-clamp-2 from-neutral-500 pl-2 truncate">
//               {item.description}
//             </p> */}
//             <p className="text-sm text-gray-600 pl-2 transition-all duration-300">
//   {openProduct === item.id 
//     ? item.description 
//     : item.description.substring(0,50) + "..."
//   }
// </p>

//             <p className="font-bold mt-1 pl-2">
//               ₹ {item.price}
//             </p>

//             <div className="mt-auto flex justify-center">
//               <button 
//                 className="border rounded 
//                            px-3 py-1 
//                            w-3/4 
//                            hover:bg-black 
//                            hover:text-white 
//                            transition mt-2 mb-2"
//                 onClick={() => dispatch(addToCart(item))}
//               >
//                 Add to Cart
//               </button>
//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Women;



import React, { useState } from 'react';
import womenproductcategory from './WomenProduct';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom"; // ✅ import

const Women = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = womenproductcategory.filter(item => {
    return (
      (selectedCategory ? item.category === selectedCategory : true) &&
      (selectedBrand ? item.brand === selectedBrand : true)
    );
  });

  return (
    <div className="flex flex-col md:flex-row">

      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-60 lg:w-64
                      p-4 border-b md:border-b-0 md:border-r
                      md:sticky md:top-0 md:h-screen">

        <h2 className="font-bold text-lg mb-3">FILTER</h2>

        {/* CATEGORY */}
        <div className="border-b pb-3 mb-3">
          <h2 className="font-semibold mb-2">CATEGORIES</h2>
          {["Dresses","Tops","Tshirts","Trouser","Shirts","Jeans"].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="checkbox"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(prev => prev === cat ? "" : cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>

        {/* BRAND */}
        <div>
          <h2 className="font-semibold mb-2">BRAND</h2>
          {["StyleCast","LULU & SKY","Trendyol","Roadster","DressBerry","StyleCast x Revolte","Moda Rapido"].map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="checkbox"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(prev => prev === brand ? "" : brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="flex-1 p-4
                      grid grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      gap-4">

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-1 hover:shadow-md transition flex flex-col cursor-pointer"
            onClick={() => navigate(`/productdetail/${item.id}`, { state: { product: item } })} // ✅ navigate on click
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded"
            />

            <h1 className="font-semibold mt-2 pl-2">{item.title}</h1>

            <p className="text-sm text-gray-600 pl-2">
              {item.description.substring(0, 50)}...
            </p>

            <p className="font-bold mt-1 pl-2">₹ {item.price}</p>

            <div className="mt-auto flex justify-center">
              <button
                className="border rounded px-3 py-1 w-3/4
                  hover:border-red-300     
                           transition mt-2 mb-2"
                onClick={(e) => {
                  e.stopPropagation();  
                  dispatch(addToCart(item));
                }}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Women;
