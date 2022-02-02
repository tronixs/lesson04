import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Header } from "./components";
import { ChatPage, ProfilePage, HomePage } from "./pages";
import "./global.css";
import "./palette.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#17212b",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          {/* <Route path="/" element={<h1>Home page</h1>} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
