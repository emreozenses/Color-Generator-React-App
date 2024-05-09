import React, { useState } from 'react'

const Form = () => {


    const [color, setColor] = useState('')

    const handleColorChange = (e) => {
      setColor(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setColor(e.target.value);
    }

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={handleColorChange}
          placeholder='#f15025'
        />
        <button className='btn' type='submit' style={{background:color}}>Submit</button>
      </form>
    </section>
  )
}

export default Form