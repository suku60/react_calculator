import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from './Containers/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes id="routes_container">
          <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
