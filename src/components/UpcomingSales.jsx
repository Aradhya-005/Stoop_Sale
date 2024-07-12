import React from 'react';
import CountDown from './CountDown' // Adjust the import path as needed
import '../style/UpcomingSales.css';

const UpcomingSales = ({ sales }) => {
    return (
        <div className="upcoming-sales">
            <h4>Upcoming Sales</h4>
            {sales.length > 0 ? (
                <ul>
                    {sales.map((sale, index) => (
                        <li key={index}>
                            <strong>{sale.name}</strong><br />
                            Date: {sale.date}<br />
                            Location: {sale.location}<br />
                            <CountDown targetDate={sale.date} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No upcoming sales.</p>
            )}
        </div>
    );
};

export default UpcomingSales;
