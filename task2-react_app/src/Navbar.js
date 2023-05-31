import React from 'react';

const Navbar = ({ onClick }) => {
      return (
            <nav>
                  <div className="brand">Anuj Company</div>
                  <button onClick={onClick}>Get Users</button>
            </nav>
      );
};

export default Navbar;
