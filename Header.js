import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <input
        type="text"
        placeholder="Search Products"
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
