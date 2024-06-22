import React, { useState } from 'react';
import Home from '../../Pages/Home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './Layout.css';
import Menu from './Menu/Menu';

const Layout = () => {
  const [toogle, setToogle] = useState(true);

  // Change toggle
  const handleToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div>
      <div className="sidebar-section">
        <div className={toogle ? "sidebar-toogle sidebar" : "sidebar"}>
          <div className="sidebar-toogle-icons">
          <Menu toogle = {toogle}/>
            <p onClick={handleToogle}>
              {toogle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
