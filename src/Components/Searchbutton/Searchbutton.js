// SearchButton.js
import React, { useState } from 'react';

function SearchButton() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      performSearch(query); 
    } else {
      console.log('Please enter a search query');
    }
  };
  const performSearch = (query) => {
    console.log(`Searching for: ${query}`);

  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      </button>
    </div>
  );
}

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    background:'#1b1b1b',
    borderRadius: '5px',
    padding: '5px',
  },
  input: {
    border: 'none',
    outline: 'none',
    padding: '5px',
    flex: 1,
  },
  button: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
  },
};

export default SearchButton;
