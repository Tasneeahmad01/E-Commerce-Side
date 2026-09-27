import React, { useState } from "react";
import BeautyItems from "./BeautyItems.json";
import BeautySidebar from "./BeautySidebar";

function Beauty() {
  const [filterCategory, setFilterCategory] = useState("");
  const [filterColor, setFilterColor] = useState("");

  const filteredItems = BeautyItems.filter((item) => {
    const categoryMatch =
      filterCategory === "" || item.category === filterCategory;

    const colorMatch =
      filterColor === "" || item.color === filterColor;

    return categoryMatch && colorMatch;
  });

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Beauty Items
      </h1>

      <div className="flex flex-col lg:flex-row gap-1">

        {/* LEFT SIDEBAR */}
        <BeautySidebar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterColor={filterColor}
          setFilterColor={setFilterColor}
        />

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-2 bg-white shadow-sm hover:shadow-lg"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-50 object-cover rounded-md"
                />

                <h2 className="font-semibold text-lg mt-3">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {item.description
                    .split(" ")
                    .slice(0, 5)
                    .join(" ")}
                  ...
                </p>
               
                <div className="flex gap-3 items-center mt-3">

                  <p className="text-xl font-semibold text-green-600">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 line-through">
                    ₹{item.line_through_price}
                  </p>

                </div>

                {item.line_through_price > item.price && (
                  <p className="text-red-500 text-sm font-semibold">
                    {Math.round(
                      ((item.line_through_price - item.price) /
                        item.line_through_price) *
                        100
                    )}
                    % off
                  </p>
                )}

                <button className="w-full mt-3 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                  Add to Cart
                </button>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Beauty;