import React from "react";
import { useParams } from "react-router-dom";
import HomeItem from "../assets/HomeItem";

const HomeKitchenDetail = () => {
  const { id } = useParams();

  const product = HomeItem.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2">

      <div className="w-full max-w-[1400px] mx-auto bg-white rounded-xl shadow p-8">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Image */}
          <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-blue-600 font-medium">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-4">
              {product.description}
            </p>

            <p className="mt-4 text-gray-600">
              Color: <b>{product.color}</b>
            </p>

            <h2 className="text-3xl text-[#353543] mt-5">
              ₹{product.price.toLocaleString("en-IN")}
            </h2>

            <span className="flex flex-1 gap-5">
              <button
                className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Add to Cart
              </button>

              <button
                className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Buy Now
              </button>
            </span>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HomeKitchenDetail;