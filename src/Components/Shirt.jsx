

import React, { useState, useMemo } from "react";
import ShirtProducts from "../Components/ShirtProduct";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CATEGORIES = [
  "Women Shirt",
  "Kids - Boys Shirts",
  "Kids - Girls Shirts",
  "Kids - Girls Tops & Tunics",
  "Men Shirts",
  "Shirts",
];

const GENDERS = ["Men", "Women", "Boys", "Girls"];

const Shirt = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // multi-select filters ab arrays hain (ek se zyada brand/category select ho sakte hain)
  const [filters, setFilters] = useState({
    gender: "",
    category: [],
    brand: [],
  });

  const [addedId, setAddedId] = useState(null);

  // BRANDS data se hi generate hota hai, hardcoding ka mismatch risk nahi rahega
  const BRANDS = useMemo(
    () => [...new Set(ShirtProducts.map((item) => item.brand))].sort(),
    []
  );

  // single-select (gender) ke liye toggle
  const handleSingleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  // multi-select (category, brand) ke liye toggle
  const handleMultiFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key];
      const exists = current.includes(value);
      return {
        ...prev,
        [key]: exists
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const filteredProducts = useMemo(() => {
    return ShirtProducts.filter(
      (item) =>
        (!filters.gender || item.gender === filters.gender) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (filters.brand.length === 0 || filters.brand.includes(item.brand))
    );
  }, [filters]);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    dispatch(addToCart(item));
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  // Reusable multi-select checkbox filter
  const CheckboxFilterList = ({ title, items, type }) => (
    <div className="border-b pb-3 mb-3">
      <h2 className="font-semibold mb-2">{title}</h2>

      {items.map((val) => (
        <label
          key={val}
          className="flex items-center gap-2 py-1 cursor-pointer"
        >
          <input
            type="checkbox"
            name={type}
            checked={filters[type].includes(val)}
            onChange={() => handleMultiFilter(type, val)}
          />
          <span>{val}</span>
        </label>
      ))}
    </div>
  );

  const GenderFilter = () => (
    <div className="border-b pb-3 mb-3">
      <h2 className="font-semibold mb-2">GENDER</h2>

      <div className="flex flex-wrap gap-2">
        {GENDERS.map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => handleSingleFilter("gender", val)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
              filters.gender === val
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
            }`}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 p-4 border-r">
        <h2 className="font-bold text-lg mb-3">FILTERS</h2>

        <CheckboxFilterList
          title="CATEGORIES"
          items={CATEGORIES}
          type="category"
        />

        <GenderFilter />

        <CheckboxFilterList title="BRANDS" items={BRANDS} type="brand" />

        {/* Clear Filters */}
        <button
          type="button"
          onClick={() =>
            setFilters({
              gender: "",
              category: [],
              brand: [],
            })
          }
          className="mt-3 w-full border py-2 rounded hover:bg-black hover:text-white"
        >
          Clear Filters
        </button>
      </div>

      {/* Products */}
      <div className="flex-1 p-4">
        <p className="text-sm text-gray-500 mb-3">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-2 cursor-pointer hover:shadow-lg transition"
                onClick={() =>
                  navigate(`/productdetail/${item.id}`, {
                    state: { product: item },
                  })
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-60 w-full object-cover rounded"
                />

                <h1 className="font-semibold mt-2">{item.title}</h1>

                <p className="text-sm text-gray-600">
                  {item.description?.slice(0, 50)}...
                </p>

                <p className="font-bold mt-2">₹ {item.price}</p>

                <button
                  type="button"
                  className={`border w-full mt-2 py-2 rounded transition ${
                    addedId === item.id
                      ? "bg-green-600 text-white border-green-600"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={(e) => handleAddToCart(e, item)}
                >
                  {addedId === item.id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No Products Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shirt;