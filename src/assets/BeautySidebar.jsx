 

 
import React, { useState } from "react";

function BeautySidebar({
  filterCategory,
  setFilterCategory,
  filterColor,
  setFilterColor,
}) {
 const category = [
  "Artificial Nails",
  "Attar",
  "Bathing Soaps",
  "Blush",
  "Body Lotion & Cream",
  "Compact",
  "Concealer",
  "Eyeliner",
  "Eyeshadow",
  "Face Cream",
  "Face Wash",
  "Foundation",
  "Lipstick",
  "Mascara",
  "Perfume",
  "Shampoo",
  "Sunscreen",
  "Conditioner",
  "Hair Oil",
  "Hair Serum",
  "Hair Color",
  "Hair Gel",
  "Hair Spray",
  "Makeup Brushes",
  "Makeup Kit",
  "Makeup Remover",
  "Nail Polish",
  "Nail Polish Remover",
  "Nail Art",
  "Kajal",
  "Lip Balm",
  "Lip Liner",
  "Lip Gloss",
  "Highlighter",
  "Bronzer",
  "Primer",
  "BB Cream",
  "CC Cream",
  "Face Powder",
  "Face Scrub",
  "Face Mask",
  "Toner",
  "Moisturizer",
  "Hand Cream",
  "Body Scrub",
  "Body Wash",
  "Deodorant",
  "Hair Mask",
  "Eyebrow Pencil",
  "Eyelash Curler"
];

  const colors = [
    "Beige",
    "Black",
    "Brown",
    "Combo Of Maroom Shade",
    "Combo Of Red Shade",
    "Pink",
    "Light Pink",
    "Maroom",
    "Multicolor",
    "Purple",
    "Olive",
    "Orange",
    "Skin",
    "Red",
    "Silver",
    "Transparent",
    "White",
    "Neavy-blue Shade",
  ];

  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="w-full lg:w-64 border rounded-lg p-3 bg-white shadow-sm h-fit">

      {/* CATEGORY */}
      <h2 className="text-xl font-semibold mb-3">
        Category
      </h2>

      <div className="space-y-2">
        {(showCategory ? category : category.slice(0, 18)).map(
          (item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer text-[#616173] text-sm"
            >
              <input
                type="checkbox"
                checked={filterCategory === item}
                onChange={() =>
                  setFilterCategory(
                    filterCategory === item ? "" : item
                  )
                }
                className="w-4 h-4 cursor-pointer"
              />

              <span>{item}</span>
            </label>
          )
        )}
      </div>

      {/* SHOW MORE ONLY CATEGORY */}
      {category.length > 8 && (
        <button
          onClick={() => setShowCategory(!showCategory)}
          className="text-pink-600 text-sm font-semibold mt-3 hover:underline"
        >
          {showCategory ? "Show Less" : "Show More"}
        </button>
      )}

      {/* COLOR */}
      <div className="pt-4 mt-4 border-t">

        <h2 className="text-xl font-semibold mb-3">
          Color
        </h2>

        <div className="flex flex-wrap gap-2">

          {colors.map((color, index) => (
            <button
              key={`${color}-${index}`}
              onClick={() =>
                setFilterColor(
                  filterColor === color ? "" : color
                )
              }
              className={`px-3 py-2 text-[#616173] rounded-full border text-sm font-semibold transition-all
                ${
                  filterColor === color
                    ? "bg-gray-200 border-gray-700"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              {color}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

export default BeautySidebar;
 
 