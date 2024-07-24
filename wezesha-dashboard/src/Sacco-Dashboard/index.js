// src/Dashboard.js
import React from 'react';
import { FaCoins } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import './index.css'; 
import BarChartComponent from '../Cooperative-Dashboard/BarChart';
import PieChartComponent from '../Cooperative-Dashboard/PieChart';
import TransactionHistoryLineChart from '../Cooperative-Dashboard/LineChart';


const Dashboard = () => {
    return (
        <body>
            <h1>Loans Analytics Overview</h1>
            <div className='totals'>
                <div className="total-loans" >
                    <div>
                        <FaCoins size={45} />
                    </div>
                    <div className="total-text">
                        <p><b>Total Loans</b></p>
                        <p><b>Ksh 1,000,000</b></p>
                    </div>
                </div>

                <div className="total-farmers" >
                    <div className="icon-container">
                        <GiFarmer size={70} />
                    </div>
                    <div className="total-text">
                        <p><b>Total Farmers</b></p>
                        <p><b>220</b></p>
                    </div>
                </div>

                <div className="total-interest" >
                    <div className="icon-container">
                        <GoGraph size={40} />
                    </div>
                    <div className="total-text">
                        <p><b>Interest Rates</b></p>
                    </div>
                </div>
            </div>

            <div className="loan-status-buttons">
                <div>
                   <button><b>Approved</b></button>
                </div>
                <div>
                    <button><b>Pending</b></button>
                </div>
                <div>
                    <button><b>Rejected</b></button>
                </div>
            </div>

            <div className="charts">
                <div className='pie_chart'>
                    <h3>Loan Status</h3>
                    <div className="chart-container">
                        <PieChartComponent />
                    </div>
                </div>
 

                <div className="bar-chart ">
                    <h3>Total Milk Production</h3>
                    <div className="bar-chart-container">
                        <BarChartComponent />
                    </div>
                </div>

            </div>

            <div id="cooperatives">
                <div>
                    <h3>Dairy Cooperatives</h3>
                    <div id="coooperative-names">
                        <div>
                           <p id="number">01</p>
                        </div>
                        <div>
                           <button className="coooperative-name">Muguga Dairy</button>
                        </div>
                        
                    </div>

                    <div id="dairy">
                        <div>
                           <p id="number">02</p>
                        </div>
                        <div>
                           <button className="limuru-name">Limuru Dairy</button>
                        </div>
                        
                    </div>

                    <div id="dairy">
                        <div>
                           <p id="number">03</p>
                        </div>
                        <div>
                           <button className="kitengela-name">Kitengela Dairy</button>
                        </div>
                        
                    </div>

                    <div id="dairy">
                        <div>
                           <p id="number">03</p>
                        </div>
                        <div>
                           <button className="githunguri-name">Githunguri Dairy</button>
                        </div>
                        
                    </div>

                    <button className="view_more">View More</button>

                </div>

                <div className="transaction-history">
                    <h3>Transaction History</h3>
                    <div className="transaction-history-chart">
                        <TransactionHistoryLineChart />
                    </div>
                </div>

            </div>
        </body>
    );
}

export default Dashboard;
