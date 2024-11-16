import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/pages/layout";
import { useSelector } from "react-redux";

export default function App() {
  const darkmode = useSelector((state) => state.darkmode);

  if (darkmode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}
