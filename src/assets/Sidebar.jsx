//  import React, { useState } from 'react';
//  function Sidebar({ setCategory, setColor }) {
//   const[filterInput,setFilterInput]=useState();
//   const data = async ()=>{
//     try{
//       const reponse = `https://dummyjson.com/products/search?q=phone`;
//       const result = await Response.json();
//       console.log(data);
      
//     }
//   }
//   return (
//     <aside className="w-[300px] shrink-0 rounded-lg bg-white p-5 shadow">

//       <h2 className="mb-6 text-xl font-bold text-slate-800">
//         FILTERS
//       </h2>
//       <div>
//         <input type="text"  className='' value={}/>
//       </div>
//       {/* CATEGORY */}
//       <h3 className="mb-4 font-semibold text-slate-700 border-b-2">
//         CATEGORY
//       </h3>
//       <div className="space-y-4">
//         {['Bluetooth Speaker', 'Bluetooth Headphones', 'Mobile'].map(
//           (item) => (
//             <label
//               key={item}
//               className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
//             >
//               <input
//                 type="checkbox"
//                 onChange={() => setCategory(item)}
//                 className="h-4 w-4 accent-blue-600"
//               />

//               {item}
//             </label>
//           )
//         )}
//       </div>

//       {/* COLOR */}
//       <h3 className="mb-3 mt-7 font-semibold text-slate-700">
//         COLOR
//       </h3>

//       <div className="flex flex-wrap gap-3">
//         {['Black','Brown','Gray','MultiColor','Orange','Pink','Purple','Red','Silver'].map((item) => (
//           <button
//             key={item}
//             type="button"
//             onClick={() => setColor(item)}
//             className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
            
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//     </aside>
//   );
// }
// export default Sidebar;




import React, { useState } from 'react';

function Sidebar({ setCategory, setColor, setSearch }) {
  const [filterInput, setFilterInput] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setFilterInput(value);
    setSearch(value);
  };

  return (
    <aside className="w-[300px] shrink-0 rounded-lg bg-white p-5 shadow">

      <h2 className="mb-6 text-xl font-bold text-slate-800">
        FILTERS
      </h2>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={filterInput}
          onChange={handleSearch}
          className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>

      {/* CATEGORY */}
      <h3 className="mb-4 border-b-2 font-semibold text-slate-700">
        CATEGORY
      </h3>

      <div className="space-y-4">
        {[
          'Bluetooth Speaker',
          'Bluetooth Headphones',
          'Mobile',
          'Laptop',
          'Tablet',
          'TV',
          'Camera',
          'Smartwatch',
          'Gaming',
          'Accessories',
          'Storage',
          'Printer',
          'Appliance',
          'Security',
          'Projector',
          'Networking',
        ].map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
          >
            <input
              type="checkbox"
              onChange={() => setCategory(item)}
              className="h-4 w-4 accent-blue-600 cursor-pointer"
            />

            {item}
          </label>
        ))}
      </div>

      {/* COLOR */}
      <h3 className="mb-3 mt-7 font-semibold text-slate-700">
        COLOR
      </h3>

      <div className="flex flex-wrap gap-3">
        {[
          'Black',
          'Brown',
          'Gray',
          'Grey',
          'MultiColor',
          'Orange',
          'Pink',
          'Purple',
          'Red',
          'Silver',
          'White',
          'Blue',
          'Green',
          'Gold',
        ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setColor(item)}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            {item}
          </button>
        ))}
      </div>

    </aside>
  );
}

export default Sidebar;