import "./App.css"
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar";
import MainContent from "./MainContent";
import Sidebar2 from "../sidebar/Sidebar2";
import MainContentSearch from "./MainContentSearch";
import { useState } from "react";
import Footer from "../footer/Footer";

function App() {
  const[searchItems,setSearchItems]=useState([])
  return (
    <div className="App">
      <Header />
      <Sidebar setSearchItems = {setSearchItems}/>
      <Sidebar2/>
      <MainContent/>
      <MainContentSearch searchItems = {searchItems}/>
      <Footer/>
    </div>
  );
}

export default App;
