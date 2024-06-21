// SearchBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from './search.svg';

const SearchBar = ({ searchTerm, setSearchTerm, searchMovies }) => {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(searchTerm);
      navigate('/');
    }
  };

  const handleSearchClick = () => {
    searchMovies(searchTerm);
    navigate('/');
  };

  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for movies"
      />
      <img src={SearchIcon} alt="search" onClick={handleSearchClick} />
    </div>
  );
};

export default SearchBar;
