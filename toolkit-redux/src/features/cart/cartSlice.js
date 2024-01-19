import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 5,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("calling");
  console.log(data);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },

    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          console.log("pending");
          state.status = "loading";
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.status = "succeeded";

          state.cartItems = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  },
});

// [getCartItems.pending]: (state) => {
//   console.log("pending");
//   state.isLoading = true;
// },
// [getCartItems.fulfilled]: (state, action) => {
//   console.log(action.payload, "fulfilled");
//   state.isLoading = false;
//   state.cartItems = action.payload;
// },
// [getCartItems.rejected]: (state) => {
//   console.log("fulfilled");
//   state.isLoading = false;
// },

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
