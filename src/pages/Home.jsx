import { Categories, mockData } from '../assets/mockData';
import { useNavigate } from 'react-router-dom';
import InfoSection from '../Components/InfoSection';
import CategorySection from '../Components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import Shop from '../pages/Shop';
const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>

      <div className='container mx-auto py-4 flex flex-col md:flex-row gap-6'>

        {/* Categories Section */}
        <div className='md:w-1/4'>

          <div className='bg-red-500 text-white font-bold w-full text-center py-2 rounded'>
            SHOP BY CATEGORIES
          </div>

          <ul className='border'>
            {Categories.map((category, index) => (
              <li
                key={index}
                className='border-b p-2 hover:bg-gray-100 cursor-pointer flex gap-2'
                onClick={() => {
                if (category === "Home Kitchen") {
                navigate("/home-kitchen");
              } else {
              navigate(`/${category.toLowerCase()}`);
  }
}}
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mt-2"></div>
                {category}
              </li>
            ))}
            
          </ul>

        </div>

        {/* Banner Section */}
        <div className='md:w-3/4'>
          <img
            src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg"
            alt="banner"
            className='w-full h-full object-cover rounded'
          />
        </div>

      </div>

      <InfoSection />
      <CategorySection />

      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-400 mb-4 font-serif text-center'>Top Products</h2>

        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>

          {products.products?.slice(0, 5).map((product) => (
           <ProductCard key={product.id} product={product}/> 
          ))}
        </div>
      </div>
    </div>
  <Shop/>
    </div>
  );
}

export default Home;






