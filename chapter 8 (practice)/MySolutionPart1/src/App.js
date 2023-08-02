import React, { useState } from "react";
import UserFormInput from "./components/UserFormInput";
import Header from "./components/Header";
import TableData from "./components/TableData";

function App() {
  const [myData, setMyData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    console.log(userInput);

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setMyData([...yearlyData]);
  };

  return (
    <React.Fragment>
      <Header />
      <UserFormInput onSubmit={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {myData.length >= 1 ? (
        <TableData data={myData} />
      ) : (
        <p>No investment calculated yet</p>
      )}
    </React.Fragment>
  );
}

export default App;
