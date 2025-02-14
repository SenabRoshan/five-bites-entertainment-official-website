import React from "react";
import Navbar from "./components/NavBar"
import Home from "./components/Home";
import Features from "./components/Features";

function App() {
  return (
    <>
      <main classname="overflow-x-hidden">
        <Navbar/>
        <Home/>
        <Features/>
      </main>
    </>
  )
}

export default App