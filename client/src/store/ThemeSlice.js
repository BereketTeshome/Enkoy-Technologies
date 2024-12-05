import { createSlice } from "@reduxjs/toolkit";

// Initial state - get the theme from localStorage or default to 'light'
const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle the theme between dark and light
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      // Save the new theme to localStorage
      localStorage.setItem("theme", state.theme);
    },
    // Set the theme explicitly
    setTheme: (state, action) => {
      state.theme = action.payload;
      // Save the theme to localStorage
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
