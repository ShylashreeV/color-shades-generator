import { useEffect, useState } from 'react'
import "./App.css";
import ChromeColor from '@uiw/react-color-chrome';
import Values from 'values.js';
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [color, setColor] = useState('#ccc');

  const onChange = (color) => {
    setColor(color.hex);

  };
  return (
    <div className='wrapper'>
      <h1 className='heading'> COLOR SHADES GENERATOR ({color}) </h1>
      <div className='color-picker'>
        <ChromeColor color={color} onChange={onChange}/>
      </div>
    </div>
  )
}

export default App