import React from "react";

const TableData = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.savingsEndOfYear.toFixed(2)}</td>
            <td>{row.yearlyInterest.toFixed(2)}</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
