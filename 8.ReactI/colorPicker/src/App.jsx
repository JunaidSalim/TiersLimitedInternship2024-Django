import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const Home = () => {
  const [color, setColor] = useState('#fff');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBackgroundColor(color);
  };

  return (
    <>
      <form 
        style={{ backgroundColor: backgroundColor, padding: '20px', borderRadius: '5px' }}
        onSubmit={handleSubmit}
      >
        <div style={{ marginBottom: '10px' }}>
          <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        </div>
        <button type="submit">Change Color</button>
      </form>
      </>
  );
};

export default Home;
