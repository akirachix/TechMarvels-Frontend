import React from 'react';
import './index.css'
import { LineChart, Line, Legend, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const TransactionHistoryLineChart = () => {
    
    const data = [
        { month: 'Jan', activeFarmers: 50000, defaulters: 250000 },
        { month: 'Feb', activeFarmers: 300000, defaulters: 45000 },
        { month: 'Mar', activeFarmers: 350000, defaulters: 70000 },
        { month: 'Apr', activeFarmers: 500000, defaulters: 105000 },
        { month: 'May', activeFarmers: 450000, defaulters: 70000 },
        { month: 'Jun', activeFarmers: 600000, defaulters: 75000 },
        { month: 'Jul', activeFarmers: 750000, defaulters: 200000 },
        { month: 'Aug', activeFarmers: 800000, defaulters: 85000 },
        { month: 'Sep', activeFarmers: 750000, defaulters: 90000 },
        { month: 'Oct', activeFarmers: 700000, defaulters: 150000 },
        { month: 'Nov', activeFarmers: 750000, defaulters: 100000 },
        { month: 'Dec', activeFarmers: 800000, defaulters: 105000 },
    ];

    const formatYAxis = (tickItem) => {
        return tickItem.toLocaleString();
    };
    
    return (
        <div className="transaction-history-chart">
            <div>
            <ResponsiveContainer width="85%" height={300}>
                <LineChart 
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"/>
                    <YAxis 
                        domain={[0, 'dataMax + 100000']}
                        ticks={[0, 200000, 400000, 600000, 800000, 1000000]}
                        tickFormatter={formatYAxis}
                    />
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                    <Legend />
                    <Line 
                        type="monotone" 
                        dataKey="defaulters" 
                        name="Defaulters" 
                        stroke="#FF5252" 
                        strokeWidth={2} 
                        // dot={{ r: 4 }} 
                        // activeDot={{ r: 8 }} 
                    />
                    <Line 
                        type="monotone" 
                        dataKey="activeFarmers"  
                        name="Active Farmers" 
                        stroke="#4CAF50" 
                        strokeWidth={2} 
                        // dot={{ r: 2 }} 
                        // activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>    
    );
}

export default TransactionHistoryLineChart;