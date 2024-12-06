import { createSlice } from "@reduxjs/toolkit";

// Initial state - get the language from localStorage or default to 'eng'
const initialState = {
	language: localStorage.getItem("language") || "eng", // Possible values: "eng", "amh"
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		// Change the language and save to localStorage
		changeLanguage: (state, action) => {
			state.language = action.payload;
			// Save the new language to localStorage
			localStorage.setItem("language", state.language);
		},
		// Set the language explicitly and save to localStorage
		setLanguage: (state, action) => {
			state.language = action.payload;
			// Save the language to localStorage
			localStorage.setItem("language", state.language);
		},
	},
});

export const { changeLanguage, setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
