import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GirlsProduct from "./GirlsProduct.json";
import  {addToCart} from '../redux/cartSlice';

const GirlsProductdetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = GirlsProduct.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            The product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Product Container */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-10">

            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6 min-h-[350px]">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[350px] object-contain hover:scale-105 transition duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  ★ {product.rating || "4.5"}
                </span>

                <span className="text-gray-500 text-sm">
                  Customer Rating
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-7 mt-5">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mt-6">
                <h2 className="text-3xl font-bold text-green-600">
                  ₹{product.price}
                </h2>

                {product.discountPercentage && (
                  <span className="text-green-600 font-semibold">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Stock */}
              <div className="mt-4">
                {product.stock > 0 ? (
                  <p className="text-green-600 font-semibold">
                    ✓ In Stock
                  </p>
                ) : (
                  <p className="text-red-600 font-semibold">
                    ✕ Out of Stock
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-800">
                  Quantity:
                </span>

                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button className="px-4 py-2 hover:bg-gray-100">
                    −
                  </button>

                  <span className="px-5 py-2 border-x">
                    1
                  </span>

                  <button className="px-4 py-2 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-7">

                {/* Add To Cart */}
                <button
                  className="flex-1 bg-[#4F6F52] hover:bg-[#3f5b42] text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        ...product,
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>

                {/* Buy Now */}
                <button
                  className="flex-1 border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
                  onClick={() => navigate("/checkout")}
                >
                  Buy Now
                </button>

              </div>

              {/* Extra Information */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="border rounded-lg p-4">
                  <p className="font-semibold text-gray-800">
                    🚚 Free Delivery
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    On eligible orders
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <p className="font-semibold text-gray-800">
                    🔄 Easy Returns
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Simple return policy
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GirlsProductdetail;