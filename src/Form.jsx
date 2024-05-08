import React, { useState } from 'react'

const Form = () => {
    const [color, setColor] = useState('#0000');

    const handleColorChange = (e)=>{
        setColor(e.target.value);
    }

  return (
    <section className='container'>
      <form className="color-form">
        <label htmlFor="color">Color Generator</label>
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={handleColorChange}
        />
        <button className='btn'>Submit</button>
      </form>
    </section>
  )
}

export default Form