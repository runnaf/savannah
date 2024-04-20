import React, { useState } from 'react';
import ColorPicker from '../../components/ColorPicker';

const CatList = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Cat List</h2>
      <ColorPicker onSelectColor={handleColorSelection} />
      {selectedColor && <p>Selected color: {selectedColor}</p>}
      {/* Render cat list */}
    </div>
  );
};

export default CatList;