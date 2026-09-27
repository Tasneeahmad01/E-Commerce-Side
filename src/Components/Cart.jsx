 
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item?.quantity || 0),
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item?.price || 0) * (item?.quantity || 0),
    0
  );

  return (
    <div>
      {/* Header */}
      <div className="w-full flex items-center pl-6 md:pl-10 pr-4 py-4 border-b border-gray-300">
        <Link to="/" className="text-4xl font-semibold text-[#4F6F52]">
          Kiling <span className="text-[#D4A017]">SHOP</span>
        </Link>
      </div>

      <div className="p-4 md:p-10 max-w-6xl mx-auto">

        {cartItems.length === 0 ? (
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=612x612&w=0&k=20&c=r5g0JlssvfuZN_fPTSwD4eoqSxXVxNX21w0Xs0NsWNo="
              alt="empty cart"
              className="w-60 mx-auto"
            />
            <span className="block mt-2 text-lg">Cart is Empty</span>
          </div>
        ) : (
          // Two-column flow: Product Details (left) + Price Details (right)
          <div className="flex flex-col md:flex-row gap-8">

            {/* LEFT: Product Details */}
            <div className="flex-1 md:w-2/3">
              <h2 className="text-xl md:text-2xl font-medium mb-6">
                Product Details
              </h2>

              {cartItems
                .filter((item) => item !== null)
                .map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex flex-col md:flex-row items-center gap-4 mb-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={item.image || item.thumbnail || item.images?.[0]}
                      alt={item.name}
                      className="w-150 h-32 object-contain"
                    />

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="text-gray-500 block">
                        {item.description}
                      </span>
                      <p className="text-gray-600 font-medium">
                        ₹ {item.price}
                      </p>
                      <p className="text-sm font-semibold">
                        Qty : {item.quantity}
                      </p>
                    </div>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition w-full md:w-auto"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </div>

            {/* RIGHT: Price Details */}
            <div className="md:w-1/3">
              <div className="border rounded-lg p-6 shadow-sm sticky top-4">
                <h2 className="text-lg font-semibold mb-4">
                  Price Details ({totalItems} Items)
                </h2>

                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total Price</span>
                  <span>₹ {totalPrice}</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;