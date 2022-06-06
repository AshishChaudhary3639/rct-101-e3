import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { Product } from "./components/Products/Product";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Products/>

       <Routes>
         <Route path="" element={<Home/>}/>
         <Route path="Products" element={<RequiredAuth><Products/></RequiredAuth>}>
           <Route path=":id" element={<Product/>}/>
         </Route>

       </Routes>
    </div>
  );
}

export default App;
