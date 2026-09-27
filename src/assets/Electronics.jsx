 
import React, { useState } from 'react';
import ElectronicItem from '../assets/ElectronicItem';
import Sidebar from '../assets/Sidebar';

const Electronics = () => {

  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [search, setSearch] = useState('');

  const products = ElectronicItem.filter((item) => {

    const matchCategory =
      category === '' || item.category === category;

    const matchColor =
      color === '' || item.color === color;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchColor && matchSearch;
  });

  return (
    <div className="flex gap-6 bg-slate-100">

      {/* LEFT SIDEBAR */}
      <Sidebar
        setCategory={setCategory}
        setColor={setColor}
        setSearch={setSearch}
      />

      {/* RIGHT PRODUCTS */}
      <div className="flex-1">

        <h2 className="mb-5 mt-2 text-2xl font-bold text-slate-800">
          Electronics Items
        </h2>

        {products.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center">
            <h3 className="text-xl font-semibold text-slate-700">
              No products found
            </h3>

            <p className="mt-2 text-slate-500">
              Try searching for another product.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-lg bg-white p-4 shadow"
              >

                <img
                  src={item.image || 'https://via.placeholder.com/300'}
                  alt={item.name}
                  className="h-48 w-full object-contain"
                />

                <h3 className="mt-3 font-semibold text-slate-800">
                  {item.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-blue-600">
                  ₹{item.price}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Electronics;