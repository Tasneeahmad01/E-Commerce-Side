 


import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import Medal from '../Components/Medal';

const Shop = () => {
  const products = useSelector(state => state.products);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">

      {/* Shop Title */}
      <h2 className="text-2xl font-400 mb-4 font-serif text-center">Shop</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 cursor-pointer">
        {products.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Medal / Grand Global Brands - Alag Section */}
      <div className="mt-12">
        <Medal />
      </div>

    </div>
  );
};

export default Shop;