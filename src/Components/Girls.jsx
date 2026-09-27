
// Girls.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import GirlsProduct from "./GirlsProduct.json";
const Girls = () => {
  const [products] = useState(GirlsProduct);
  const [sort, setSort] = useState("trending");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [...new Set(products.map(p => p.category.toLowerCase()))];
  const brands = [...new Set(products.map(p => p.brand.toLowerCase()))];

  const filteredProducts = products
    .filter(
      ({ category, brand }) =>
        (!selectedCategory || category.toLowerCase() === selectedCategory) &&
        (!selectedBrand || brand.toLowerCase() === selectedBrand)
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "new") return b.id - a.id;
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row mt-2">
      <div className="w-full md:w-72 p-2 pl-8 border-r bg-white">
        <h2 className="font-semibold mb-3 text-[18px]">FILTERS</h2>

        <h3 className="font-semibold mt-2 border rounded border-gray-800 p-2 text-[18px] pl-5">Category</h3>
        {categories.map(cat => (
          <label key={cat} className="flex gap-2 py-1 text-gray-800">
            <input
              type="checkbox"
              checked={selectedCategory === cat}
              onChange={() => setSelectedCategory(cat)}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}

        <h3 className="font-semibold mt-4 border rounded border-gray-900 p-2 text-[18px] pl-5">Brand</h3>
        {brands.map(brand => (
          <label key={brand} className="flex gap-2 py-1 text-gray-800">
            <input
              type="checkbox"
              checked={selectedBrand === brand}
              onChange={() => setSelectedBrand(brand)}
            />
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </label>
        ))}

        <button
          className="mt-4 text-red-500 underline"
          onClick={() => {
            setSelectedCategory("");
            setSelectedBrand("");
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-lg">Products</h2>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="trending">Trending</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
            <option value="new">Newest</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(item => (
            <div
              key={item.id}
              onClick={() => navigate(`/Girlsproductdetail/${item.id}`)}
              className="border rounded-lg p-2 cursor-pointer hover:shadow-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-60 w-full object-cover rounded"
              />

              <h3 className="font-semibold mt-2">{item.title}</h3>

              <p className="text-sm text-gray-500 truncate">
                {item.description}
              </p>
                
              <div className="flex items-center gap-6">
  <p className="text-green-600 font-semibold mt-2 text-2xl">
    ₹{item.price}
  </p>

  <p className="text-[14px] text-gray-800 mt-2 font-semibold">
    Category : {item.category}
  </p>
</div>
              <button
                className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart({ ...item, quantity: 1 }));
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Girls;
