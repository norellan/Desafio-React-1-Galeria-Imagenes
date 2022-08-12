import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/layout/header";
import GaleryComponent from "./components/galeria/galery";
import FooterComponent from "./components/layout/footer.jsx";
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <NavbarComponent title="GALERÍA DE IMÁGENES CON REACT" />
      <GaleryComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
