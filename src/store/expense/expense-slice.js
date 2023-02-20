import { createSlice } from "@reduxjs/toolkit";
const addCart = createSlice({
  name: "shop",
  initialState: {
    cart: [],
    baskext
    // :localStorage.getItem("basket")
    // ? JSON.parse(localStorage.getItem("basket"))
      : [],
  },
  reducers: {
    addCar: (state, action) => {
      state.cart = action.payload;
    },

    shop: (state, action) => {
      state.baskext.push(action.payload);
      // localStorage.setItem("basket", JSON.stringify(state.baskext));
    },

    delshop: (state, action) => {
      state.baskext.splice(action.payload, 1);
    },
    plus: (state, action) => {
      const art = state.baskext.findIndex(
        (product) => product.id === action.payload.id
      );
      state.baskext[art].count += 1;
      localStorage.setItem("basket",JSON.stringify(state.baskext))
    },
    minus: (state, action) => {
      const azalma = state.baskext.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.baskext[azalma].count !== 1) {
        state.baskext[azalma].count -= 1;
      }
      localStorage.setItem("basket",JSON.stringify(state.baskext))
      
    },
  },
});

export const { addCar, shop, delshop, plus, minus } = addCart.actions;
export default addCart.reducer;
