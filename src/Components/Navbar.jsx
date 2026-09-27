 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/search?query=${search}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-7 py-4 flex items-start justify-between gap-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-semibold text-[#4F6F52] pt-2"
        >
          Kiling <span className="text-[#D4A017]">SHOP</span>
        </Link>

        {/* Search + Links */}
        <div className="flex-1 max-w-[500px]">

          <form onSubmit={handleSearch}>
            <div className="flex border rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#D4A017]">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 outline-none"
              />

              <button
                type="submit"
                className="px-5 bg-[#4F6F52] text-white hover:bg-[#2F4F3A]"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-7 mt-7 font-semibold">
            <Link to="/" className="border-b-2 border-transparent hover:border-red-600">
              Home
            </Link>

            <Link to="/men" className="border-b-2 border-transparent hover:border-red-600">
              Men
            </Link>

            <Link to="/women" className="border-b-2 border-transparent hover:border-red-600">
              Women
            </Link>

            <Link to="/girls" className="border-b-2 border-transparent hover:border-red-600">
              Girls
            </Link>

            <Link to="/shirt" className="border-b-2 border-transparent hover:border-red-600">
              Shirts
            </Link>

            <Link to="/kids" className="border-b-2 border-transparent hover:border-red-600">
              Kids
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 pt-2">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-red-500"
          >
            <FaShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <span className="text-gray-300">|</span>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-[#D4A017]"
          >
            <FaUser size={15} />
            Logout
          </button>

          <span className="text-gray-400">|</span>

          {/* Signup */}
          <Link
            to="/signup"
            className="text-gray-700 hover:text-[#D4A017]"
          >
            Signup
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

