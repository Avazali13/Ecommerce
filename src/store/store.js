import { configureStore } from "@reduxjs/toolkit";
import addCart from "./expense/expense-slice"

const store=configureStore({
reducer:{
    shop:addCart
}
})

export default store;