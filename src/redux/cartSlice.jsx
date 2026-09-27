// import { createSlice } from "@reduxjs/toolkit";

// // safe load function
// const loadCartFromStorage = () => {
//   try {
//     const data = localStorage.getItem("cart");
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.error("Error parsing cart data", error);
//     return [];
//   }
// };

// const initialState = {
//   cartItems: loadCartFromStorage()
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       state.cartItems.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },

//     removeItem(state, action) {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     }
//   }
// });

// export const { addToCart, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;


 

// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// // LocalStorage से safe load function
// const loadCartFromStorage = () => {
//   try {
//     const data = localStorage.getItem("cart");
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.error("Error parsing cart data", error);
//     return [];
//   }
// };

// const initialState = {
//   cartItems: loadCartFromStorage()
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingItem = state.cartItems.find(
//         item => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//       }

//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },

//     removeItem(state, action) {
//       state.cartItems = state.cartItems.filter(
//         item => item.id !== action.payload
//       );
//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     }
//   }
// });

// export const { addToCart, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;

 
 













// import { createSlice } from "@reduxjs/toolkit";

// const loadCartFromStorage = () => {
//   try {
//     const data = localStorage.getItem("cart");
//     return data ? JSON.parse(data) : [];
//   } catch {
//     return [];
//   }
// };

// const initialState = {
//   cartItems: loadCartFromStorage()
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingItem = state.cartItems.find(
//         item => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cartItems.push({
//           ...action.payload,
//           quantity: 1
//         });
//       }

//       // remove duplicates safety
//       state.cartItems = Array.from(
//         new Map(state.cartItems.map(item => [item.id, item])).values()
//       );

//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     },

//     removeItem(state, action) {
//       state.cartItems = state.cartItems.filter(
//         item => item.id !== action.payload
//       );

//       localStorage.setItem("cart", JSON.stringify(state.cartItems));
//     }
//   }
// });

// export const { addToCart, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

// load cart safely + remove duplicates
const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    const parsed = data ? JSON.parse(data) : [];

    // remove duplicates by id
    const unique = Array.from(
      new Map(parsed.map(item => [item.id, item])).values()
    );

    return unique;
  } catch {
    return [];
  }
};

const initialState = {
  cartItems: loadCartFromStorage()
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }

      // remove duplicates safety
      state.cartItems = Array.from(
        new Map(state.cartItems.map(item => [item.id, item])).values()
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cart");
    }

  }
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;