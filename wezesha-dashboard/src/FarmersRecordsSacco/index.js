import React, { useState } from 'react';
import './index.css';
import { IoMdSearch } from "react-icons/io";

const FarmersRecordsSacco = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const data = [
      { id: 1, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'K-Unity', amountMade: 30000, expenses: 'None' },
      { id: 2, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Muguga', amountMade: 30000, expenses: 'None' },
      { id: 3, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Limuru', amountMade: 30000, expenses: 'None' },
      { id: 4, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'K-Unity', amountMade: 30000, expenses: 'None' },
      { id: 5, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Muguga', amountMade: 30000, expenses: 'None' },
      { id: 6, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Limuru', amountMade: 30000, expenses: 'None' },
      { id: 7, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'K-Unity', amountMade: 30000, expenses: 'None' },
      { id: 8, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Muguga', amountMade: 30000, expenses: 'None' },
      { id: 9, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Limuru', amountMade: 30000, expenses: 'None' },
      { id: 10, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'K-Unity', amountMade: 30000, expenses: 'None' },
      { id: 11, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Muguga', amountMade: 30000, expenses: 'None' },
      { id: 12, date: '1-Jan-2024', milkProduction: 5000, cooperative: 'Limuru', amountMade: 30000, expenses: 'None' },
      
    ];
  
    return (
      <div className="records-container">
        <h1>Records</h1>
        <div className="search-container">
          <input
          className='search-bar'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          < IoMdSearch className='search-icon' />
          {/* <button className="search-button">< IoMdSearch className='search-icon' /></button> */}
        </div>
        <table className="records-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Milk Production (L)</th>
              <th>Cooperative</th>
              <th>Amount Made</th>
              <th>Expenses</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td style={{borderLeftColor:'black'}}>{row.id}</td>
                <td>{row.date}</td>
                <td>{row.milkProduction}</td>
                <td>{row.cooperative}</td>
                <td>{row.amountMade}</td>
                <td>{row.expenses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default FarmersRecordsSacco;
  