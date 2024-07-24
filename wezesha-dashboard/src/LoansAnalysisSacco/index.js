import React, { useState } from 'react';
import './index.css';
import { IoMdSearch } from "react-icons/io";

const LoanAnalysisDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const loanData = [
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Approved' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Rejected' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Pending' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Approved' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Approved' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Pending' },
    { name: 'Miriam Koome', accountNumber: '011223344556677', phoneNumber: '+254 710203040', status: 'Rejected' },
  ];

  return (
    <div className="dashboard">
      <div className="stats-container">
        <div className="stat-box">
          <h2>100</h2>
          <p>Loan Repayments</p>
        </div>
        <div className="stat-box">
          <h2>60</h2>
          <p>In progress Loan Applications</p>
        </div>
        <div className="stat-box">
          <h2>500</h2>
          <p>Disbursed Loan Applications</p>
        </div>
        <div className="stat-box">
          <h2>10</h2>
          <p>Rejected Loan Applications</p>
        </div>
      </div>
      
      <div className="search-container">
        <input 
          type="text"  
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        < IoMdSearch className='loan-search-icon' />
      </div>
      
      <table className="loan-table">
        <thead>
          <tr>
            <th>Farmer's Name</th>
            <th>Account Number</th>
            <th>Phone Number</th>
            <th>Loan Status ▼</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index}>
              <td className='table-data'>{loan.name}</td>
              <td className='table-data'>{loan.accountNumber}</td>
              <td className='table-data'>{loan.phoneNumber}</td>
              <td className={`status ${loan.status.toLowerCase()}`}>{loan.status}</td>
              <td>
                <button className="action-button delete">✕</button>
                <button className="action-button approve">✓</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
  );
};

export default LoanAnalysisDashboard;
