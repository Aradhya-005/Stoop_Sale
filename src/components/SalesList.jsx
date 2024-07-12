import React from 'react';

const SalesList = ({ sales }) => {
  return (
    <div>
      <h2>Upcoming Sales</h2>
      <ul>
        {sales.map((sale, index) => (
          <li key={index}>
            {sale.name} - {sale.date} at {sale.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
