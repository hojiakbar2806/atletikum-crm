import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("darkmode")) || false; // Local storage dan o'qish yoki false

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState, // Initial state'ni belgilash
  reducers: {
    toggleDarkMode: (state) => {
      const newState = !state; // Dark mode holatini o'zgartirish
      localStorage.setItem("darkmode", JSON.stringify(newState)); // Local storage ga yozish
      return newState; // Yangi holatni qaytarish
    },
  },
});

// Actions'ni eksport qilish
export const { toggleDarkMode } = darkModeSlice.actions;

// Reducerni eksport qilish
export default darkModeSlice.reducer;
