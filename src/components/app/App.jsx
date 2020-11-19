import React, { useState, useRef } from 'react';
import Burger from '../app/burgerMenu/BurgerMenu';
import Menu from '../app/menu/Menu';
import { useOnClickOutside } from '../../hooks';
import logo from '../../assets/logo.png';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div>
        <img src={logo} alt="logo icon" />
      </div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
export default App;
