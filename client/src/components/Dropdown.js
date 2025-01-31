import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dropdown() {
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:3001/populateCdrsDropdown')
      .then(response => {
        setNames(response.data.names);
      })
      .catch(error => {
        console.error('Error fetching CDR types:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter names based on search term
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="searchInput">Search:</label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleSearch}
      />
      <label htmlFor="namesDropdown">Select a CDR Type:</label>
      <select id="namesDropdown" value={selectedName} onChange={handleChange}>
        <option value="">Select...</option>
        {filteredNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
