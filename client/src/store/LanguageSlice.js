import { createSlice } from "@reduxjs/toolkit";

// Initial state with default language set to "eng" (English)
const initialState = {
  language: "eng", // Possible values: "eng", "amh"
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Action to change the language
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
