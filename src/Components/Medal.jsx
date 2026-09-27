

// import React, { useState } from "react";
// import { brandsData } from "./MedalProduct";
// import { useNavigate } from "react-router-dom";

// const Medal = () => {
//   const [showitem,setShowItem]=useState(null);
//   const navigate=useNavigate();
//   return (
//     <div className="w-full bg-white pl-4 py-4 relative overflow-hidden">

//       {/* Side Badge */}
//       <div
//         className="absolute right-0 top-20 bottom-0 bg-gray-900 text-white flex items-center justify-center z-10 text-[16px] font-extrabold tracking-widest uppercase"
//         style={{ writingMode: "vertical-rl", padding: "12px 5px", height:'290px'}}
//       >
//         UPTO ₹300 OFF
//       </div>

//       {/* Title */}
//       <h2 className="text-xl  font-semibold uppercase tracking-[0.11em] text-gray-900 mb-3 pr-10">
//         Grand Global Brands
//       </h2>

//       {/* Cards Row */}
//       <div className="flex gap-2.5 overflow-x-auto pb-2 pr-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mt-12">
//         {brandsData.map((item) => (
//           <div
//             key={item.id}
//             className="min-w-[200px] max-w-[200px] rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//           onClick={()=>setShowItem(item)}>
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={item.img}
//                 alt={item.brand}
//                 className="w-full h-60 object-cover object-top block"
//               />
//               {item.tag && (
//                 <span className="absolute top-2 right-2 bg-orange-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded tracking-wide">
//                   {item.tag}
//                 </span>
//               )}
//             </div>

//             {/* Info */}
//             <div className="px-2.5 py-2 bg-white border-t border-gray-100">
//               <p className="text-[16px] font-extrabold text-gray-900 uppercase tracking-wider mb-0.5">
//                 {item.brand}
//               </p>
//               <p className="text-[13px] font-bold text-gray-900 mb-0.5">
//                 {item.label}
//               </p>
//               <p className="text-[11px] font-bold text-red-600">
//                 {item.discount}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center gap-1.5 mt-3 pr-10">
//         {[0, 1].map((i) => (
//           <div
//             key={i}
//             className={`h-2 rounded-full transition-all ${
//               i === 0 ? "w-5 bg-gray-600" : "w-2 bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Medal;

 

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { brandsData } from "./MedalProduct";

// const Medal = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full bg-white pl-4 py-4">

//        <h2 className="text-xl  font-semibold uppercase tracking-[0.11em] text-gray-900 mb-3 pr-10">
//         Grand Global Brands
//       </h2>

//       <div className="flex gap-2.5 overflow-hidden mt-6">
//         {brandsData.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => navigate(`/medal/${item.id}`)}
//             className="min-w-[200px] cursor-pointer border rounded"
//           >
//             <img
//               src={item.img}
//               alt=""
//               className="w-full h-48 object-cover rounded"
//             />

//             <div className="p-2 overflow-hidden">
//               <p className="font-bold">{item.brand}</p>
//               <p className="text-sm">{item.label}</p>
//               <p className="text-red-600">{item.discount}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//  </div>
//   );
// };

// export default Medal;











import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { brandsData } from "./MedalProduct";

const Medal = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 210; // approx width
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <div className="w-full bg-white pl-4 py-4">

      <h2 className="text-xl font-semibold mb-3">
        Grand Global Brands
      </h2>

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-2.5 overflow-x-auto mt-6 scroll-smooth 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {brandsData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => navigate(`/medal/${item.id}`)}
            className="min-w-[200px] cursor-pointer border rounded"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-48 object-cover rounded"
            />

            <div className="p-2">
              <p className="font-bold">{item.brand}</p>
              <p className="text-sm">{item.label}</p>
              <p className="text-red-600">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Dots */}
      <div className="flex justify-center mt-3 gap-2">
  {[0, 1].map((i) => (
    <div
      key={i}
      className={`h-2 rounded-full transition-all ${
        activeIndex < brandsData.length / 2
          ? i === 0
            ? "w-5 bg-black"
            : "w-2 bg-gray-300"
          : i === 1
          ? "w-5 bg-black"
          : "w-2 bg-gray-300"
      }`}
    />
  ))}
</div>
    </div>
  );
};

export default Medal;

 