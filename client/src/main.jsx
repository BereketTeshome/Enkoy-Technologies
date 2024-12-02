import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import languageSlice from "./store/LanguageSlice.js";
import themeSlice from "./store/ThemeSlice.js";

const store = configureStore({
  reducer: {
    component: {
      languageSlice,
      themeSlice
    },
    
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
