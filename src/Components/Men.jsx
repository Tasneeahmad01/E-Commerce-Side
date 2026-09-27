import React, { useEffect, useState } from "react";

const materialOptions = [
  "Cotton",
  "Linen",
  "Polyester",
  "Wool",
  "Denim",
  "Silk",
  "Nylon",
  "Rayon",
  "Spandex",
  "Leather",
  "Khadi",
  "Blend",
  "Viscose",
  "Satin",
  "Crepe",
  "Chiffon",
  "Flannel"
];

const Men = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("trending");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then(res => res.json())
      .then(data => {
        const repeatData = Array(20).fill(data.products).flat();
        setProducts(repeatData);
      });
  }, []);

  // sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if(sort==="New") return b.price;
    return 0;
  });

  return (
    <div className="flex h-screen">

      {/* Filter Section */}
      <div className="w-64 p-4 border-r h-screen overflow-y-auto">
        <h2 className="font-bold text-lg mb-3">FILTER & SORT</h2>

        <p className="font-semibold mb-2">Sort By</p>

        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-2 cursor-pointer ">
            <input type="radio" name="sort" onChange={() => setSort("trending")} className="w-4 h-4"/>
            Trending
          </label>
          <label className="flex items-center gap-2 cursor-pointer ">
            <input type="radio" name="sort" onChange={() => setSort("trending")} className="w-4 h-4"/>
            New
          </label>
          <label className="flex items-center gap-2 cursor-pointer ">
            <input type="radio" name="sort" onChange={() => setSort("trending")} className="w-4 h-4"/>
            Old Trending
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" onChange={() => setSort("high")} className="w-4 h-4"/>
            High Price
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" onChange={() => setSort("low")} className="w-4 h-4"/>
            Low Price
          </label>
        </div>

        <p className="font-semibold mb-2">Material</p>

        <div className="space-y-2">
          {materialOptions.map((item, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>

      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-center text-center flex-1 overflow-y-auto h-screen p-4">
        {sortedProducts.map((item, index) => (
          <div key={index} className="border m-2 p-4 w-52 rounded cursor-pointer">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-60 w-full object-cover"
            />
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Men;