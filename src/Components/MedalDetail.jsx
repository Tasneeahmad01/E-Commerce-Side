 
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brandsData } from "./MedalProduct";

function MedalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  // 👉 current product
  const product = brandsData.find(
    (item) => item.id === Number(id)
  );

  if (!product) return <h2>Product Not Found</h2>;

  // 👉 dynamic filter lists
  const categories = [...new Set(brandsData.map(item => item.category))];
  const brands = [...new Set(brandsData.map(item => item.brand))];

  // 👉 similar products + filter
  const filteredProducts = brandsData.filter(item => {
    return (
      item.id !== product.id &&
      (selectedCategory ? item.category === selectedCategory : true) &&
      (selectedBrand ? item.brand === selectedBrand : true)
    );
  });

  return (
    <div className="flex flex-col md:flex-row">

      {/* 🔥 LEFT SIDEBAR */}
      <div className="w-full md:w-60 p-4 border-r">

        <h2 className="font-bold mb-3">FILTER</h2>

        {/* CATEGORY */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map((cat) => (
            <label key={cat} className="flex gap-2 py-1">
              <input
                type="checkbox"
                checked={selectedCategory === cat}
                onChange={() =>
                  setSelectedCategory(prev => prev === cat ? "" : cat)
                }
              />
              {cat}
            </label>
          ))}
        </div>

        {/* BRAND */}
        <div>
          <h3 className="font-semibold mb-2">Brand</h3>
          {brands.map((brand) => (
            <label key={brand} className="flex gap-2 py-1">
              <input
                type="checkbox"
                checked={selectedBrand === brand}
                onChange={() =>
                  setSelectedBrand(prev => prev === brand ? "" : brand)
                }
              />
              {brand}
            </label>
          ))}
        </div>

      </div>

      {/* 🔥 RIGHT SIDE */}
      <div className="flex-1 p-5">

        {/* ✅ MAIN PRODUCT */}
        {/* <div className="flex flex-col items-center mb-6">
          <img
            src={product.img}
            alt=""
            className="w-72 h-72 object-cover rounded"
          />

          <h2 className="text-2xl font-bold mt-3">
            {product.brand}
          </h2>

          <p>{product.label}</p>

          <p className="text-red-600 font-bold">
            {product.discount}
          </p>

          <p className="text-gray-600">
            Category: {product.category}
          </p> */}
        {/* </div> */}

        {/* 🔥 SIMILAR PRODUCTS */}
        <h2 className="text-xl font-bold mb-3">
          Similar Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/medal/${item.id}`)}
              className="border p-2 rounded cursor-pointer hover:shadow"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-40 object-cover rounded"
              />

              <p className="font-bold">{item.brand}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default MedalDetail;