import React, { useState } from 'react';
import KidsProducts from './KidsProduct';
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
 
const Kids = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const filteredProducts = KidsProducts.filter((item) => {
    const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
    const brandMatch = selectedBrand ? item.brand === selectedBrand : true;
    const genderMatch = selectedGender ? item.gender === selectedGender : true;
    return categoryMatch && brandMatch && genderMatch;
  });
   
 
  return (
    <div className="flex flex-col md:flex-row">
 
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-60 lg:w-64
                      p-4 border-b md:border-b-0 md:border-r
                      md:sticky md:top-0 h-full">
                      
 
        <h2 className="font-semibold text-lg mb-3">FILTERS</h2>
        <hr />
 
        {/* GENDER */}
        <div className="border-b pb-3 mb-3 mt-3">
          {["Boys", "Girls"].map((gender) => (
            <label key={gender} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="radio"
                checked={selectedGender === gender}
                onChange={() => setSelectedGender(prev => prev === gender ? "" : gender)}
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
 
        {/* CATEGORY */}
        <div className="border-b pb-3 mb-3">
          <h2 className="mb-2 font-semibold">CATEGORIES</h2>
          {["Tshirts","Clothing Set","Shirts","Kurta Sets","Bodysuit","Sweatshirts","Shorts","Track Pants"].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="checkbox"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(prev => prev === cat ? "" : cat)}
              />
              <span className='text-gray-800 font-[10px]'>{cat}</span>
            </label>
          ))}
        </div>
 
        {/* BRAND */}
        <div>
          <h2 className="font-semibold mb-2">BRAND</h2>
          {["Arvesa", "BAESD","YK","Pantaloons Junior","MUKHAKSH","MINI KLUB","U.S. Polo Assn. Kids","V-Mart"].map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer py-1">
              <input
                type="checkbox"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(prev => prev === brand ? "" : brand)}
              />
              <span className='text-gray-800'>{brand}</span>
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
            onClick={() => navigate(`/productdetail/${item.id}`, { state: { product: item } })}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded"
            />
 
            <h1 className="font-semibold font-serif mt-2 pl-2 text-gray-900">{item.title}</h1>
 
            <p className="text-[0.9rem] text-gray-600 pl-2">
              {item.description.substring(0, 50)}
            </p>
 
            <p className="font-bold mt-1 pl-2">₹ {item.price}</p>
 
            <div className="mt-auto flex justify-center">
              <button
                className="border rounded px-3 py-1 w-3/4
                           hover:bg-black hover:text-white
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
 
export default Kids;


 