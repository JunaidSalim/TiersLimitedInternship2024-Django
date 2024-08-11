import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [formBackgroundColor, setFormBackgroundColor] = useState('#a1e3f5');
  const [color, setColor] = useState('#000000');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleChangeColor = (e) => {
    e.preventDefault();
    setFormBackgroundColor(color);
  };

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <form className="form" style={{ backgroundColor: formBackgroundColor }}>
        <h2>Billing details</h2>
        <div className="input-group">
          <label>Color Picker</label>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
        <button className="change-color-btn" onClick={handleChangeColor}>Change Color</button>
      </form>
    </div>
  );
};

export default Home;
