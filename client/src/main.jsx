import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import languageReducer from "./store/LanguageSlice.js";
import themeReducer from "./store/ThemeSlice.js";

const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router future={{ v7_startTransition: true }}>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
