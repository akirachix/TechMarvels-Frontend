import React from 'react';
import './index.css';

const SaccoAccountsDashboard = () => {
  const stats = [
    { label: 'Dairy Cooperatives', value: 50 },
    { label: 'Have Shares In the Store', value: 600 },
    { label: 'Process ongoing', value: 50 },
    { label: 'Rejected Applications', value: 10 },
  ];

  const tableData = [
    { name: 'Miriam Koome', cooperative: 'Muguga Cooperative', saccoId: '01', sharesStatus: 'Yes', status: 'Completed' },
    { name: 'Miriam Koome', cooperative: 'Limuru Cooperative', saccoId: '02', sharesStatus: 'No', status: 'Canceled' },
    { name: 'Miriam Koome', cooperative: 'Muguga Cooperative', saccoId: '03', sharesStatus: 'Pending', status: 'Pending' },
    { name: 'Miriam Koome', cooperative: 'Limuru Cooperative', saccoId: '04', sharesStatus: 'Yes', status: 'Completed' },
    { name: 'Miriam Koome', cooperative: 'Muguga Cooperative', saccoId: '05', sharesStatus: 'Yes', status: 'Completed' },
    { name: 'Miriam Koome', cooperative: 'Limuru Cooperative', saccoId: '06', sharesStatus: 'Pending', status: 'Pending' },
    { name: 'Miriam Koome', cooperative: 'Limuru Cooperative', saccoId: '07', sharesStatus: 'No', status: 'Canceled' },
  ];

  return (
    <div className="dashboard">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="table-container">
        <table className='loan-table'>
          <thead>
            <tr>
              <th>Farmer's Name</th>
              <th>Cooperative Name</th>
              <th>Sacco ID</th>
              <th>Shares Status</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className='table-data'>{row.name}</td>
                <td className='table-data'>{row.cooperative}</td>
                <td className='table-data'>{row.saccoId}</td>
                <td className={`shares-status ${row.sharesStatus.toLowerCase()}`}>{row.sharesStatus}</td>
                <td className={`status ${row.status.toLowerCase()}`}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SaccoAccountsDashboard;
