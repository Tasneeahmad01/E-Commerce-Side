import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeItem from "../assets/HomeItem";
import HomeSidebar from "../assets/HomeSidebar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const HomeKitchen = () => {
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = HomeItem.filter((item) =>
    (!category || item.category === category) &&
    (!color || item.color === color) &&
    (item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()))
  );

  const clearFilters = () => {
    setCategory("");
    setColor("");
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="px-5 py-6 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">
          Home & Kitchen
        </h1>
        <p className="text-gray-500 mt-1">
          Discover the best products for your home and kitchen
        </p>
      </div>

      <div className="flex gap-6 p-1">

        <HomeSidebar
          category={category}
          setCategory={setCategory}
          color={color}
          setColor={setColor}
          search={search}
          setSearch={setSearch}
        />

        <main className="flex-1">

          <div className="mb-4 flex justify-between">
            <p className="text-gray-600">
              Showing <b className="text-gray-900">{products.length}</b> products
            </p>

            {(category || color || search) && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          {products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                onClick={()=>navigate(`/homekitchenDetail/${item.id}`)}>

                  <div className="h-56 bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-blue-600 font-medium">
                      {item.category}
                    </p>

                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {item.description}
                    </p>

                    <p className="text-sm text-gray-600 mt-3">
                      Color: <b>{item.color}</b>
                    </p>

                    <div className="mt-4">
                      <span className="text-[30px] font-semibold text-[#353543]">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    <button
                     onClick={() => {
                     dispatch(addToCart(item));
                     navigate("/cart");
  }}
  className="w-full mt-3 bg-black text-white py-2.5 rounded-lg text-sm hover:bg-gray-800"
>
  Add to Cart
</button>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          ) : (
            <div className="bg-white rounded-xl p-10 text-center">
              <div className="text-5xl">🛍️</div>

              <h2 className="text-xl font-semibold mt-4">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Try changing your search or filters.
              </p>

              <button
                onClick={clearFilters}
                className="mt-5 bg-black text-white px-6 py-2 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default HomeKitchen;