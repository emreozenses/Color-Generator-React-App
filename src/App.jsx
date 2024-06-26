import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {

  const [colors, setColors] = useState(new Values('#f15025').all(10))
  const addColor = (color)=>{
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      
    } catch (error) {
      
      toast.error(error.message);
    }
  };


  return (
    <main>
      <ToastContainer position="top-center"/>
      <div className="container">
        <Form addColor = {addColor}/>
      </div>
      <div className="colors">
        <ColorList colors={colors}/>
      </div>
    </main>
  )};
export default App;
