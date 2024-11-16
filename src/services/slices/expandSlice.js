import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("expand")) || false; // Local storage dan o'qish yoki false

const expandSlice = createSlice({
  name: "expand",
  initialState, // Initial state'ni belgilash
  reducers: {
    toggleExpand: (state) => {
      const newState = !state; // Expand holatini o'zgartirish
      localStorage.setItem("expand", JSON.stringify(newState)); // Local storage ga yozish
      return newState; // Yangi holatni qaytarish
    },
  },
});

// Actions'ni eksport qilish
export const { toggleExpand } = expandSlice.actions;

// Reducerni eksport qilish
export default expandSlice.reducer;
