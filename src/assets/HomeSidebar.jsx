import React from "react";

const HomeSidebar = ({
    category,
    setCategory,
    color,
    setColor,
    search,
    setSearch,
}) => {

    const categories = [
        "Furniture",
        "Kitchen Appliances",
        "Cookware",
        "Home Decor",
        "Bedding",
        "Storage",
        "Lighting",
        "Cleaning",
        "Bake Ware",
        "Bathroom Accessories",
        "Branded Rice Chookers",
        "Coffee",
    ];

    const colors = [
        "Brown",
        "Black",
        "White",
        "Silver",
        "Gold",
        "Green",
        "Blue",
        "Gray",
    ];

    return (
        <aside className="hidden lg:block w-[280px] shrink-0">

            <div className="bg-white rounded-xl shadow-sm p-5 sticky ">

                {/* Category */}
                <div>
                    <h2 className="font-semibold border-b-2 border-gray-300 pb-2 w-full">
                        FILTERS
                    </h2>
                    {/* <p>{item.length}</p> */}
                    <h2 className="text-lg font-bold text-gray-800 mb-4 mt-2">
                        CATEGORY
                    </h2>
                    <div className="relative">

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />

                        {/* Clear Search */}
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                            >
                                ✕
                            </button>
                        )}

                    </div>


                    <div className="space-y-3">
                        {/* Categories */}
                        {categories.map((item) => (

                            <label
                                key={item}
                                className="flex items-center gap-3 cursor-pointer group mt-2"
                            >

                                <input
                                    type="checkbox"
                                    checked={category === item}
                                    onChange={() => setCategory(item)}
                                    className="accent-black"
                                />

                                <span className="text-gray-700 group-hover:text-black">
                                    {item}
                                </span>

                            </label>

                        ))}

                    </div>
                </div>

                {/* ================= SEARCH ================= */}

                <div className="border-t border-gray-200 my-6"></div>

                <div>




                </div>

                {/* ================= COLOR ================= */}

                <div className="border-t border-gray-200 my-6"></div>

                <div>

                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        COLOR
                    </h2>

                    <div className="space-y-3">

                        {/* All Colors */}
                        <label className="flex items-center gap-3 cursor-pointer group">

                            <input
                                type="checkbox"
                                checked={color === ""}
                                onChange={() => setColor("")}
                                className="accent-black"
                            />

                            <span className="text-gray-700 group-hover:text-black">
                                All Colors
                            </span>

                        </label>

                        {/* Colors */}
                        {colors.map((item) => (

                            <label
                                key={item}
                                className="flex items-center gap-3 cursor-pointer group"
                            >

                                <input
                                    type="checkbox"
                                    checked={color === item}
                                    onChange={() => setColor(item)}
                                    className="accent-black"
                                />

                                <span className="text-gray-700 group-hover:text-black">
                                    {item}
                                </span>

                            </label>

                        ))}

                    </div>

                </div>

            </div>

        </aside>
    );
};

export default HomeSidebar;



