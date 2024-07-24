import React from 'react';
import './index.css'
import { BarChart,Bar, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const BarChartComponent = () => {

    const COLORS = ["#2A88BD"];
    const data = [
        { name: "Jan", value: 60 },
        { name: "Feb", value: 43 },
        { name: "March", value: 40 },
        { name: "April", value: 50 },
        { name: "May", value: 55 },
        { name: "June", value: 56 },
        { name: "July", value: 65 },
        { name: "Aug", value: 78 },
        { name: "Sept", value: 60 },
        { name: "Oct", value: 50 },
        { name: "Nov", value: 76 },
        { name: "Dec", value: 72 },
    ];

    return (
        <div id="BarChart_Design">

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data = {data}>
                    <XAxis dataKey ="name"/>
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey = "value" fill={COLORS[0]} />
                </BarChart>
            </ResponsiveContainer>
       
        </div>    
    );
}

export default BarChartComponent;
