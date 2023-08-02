import React, { useRef } from "react";

const UserFormInput = (props) => {
  const currentSavings = useRef();
  const yearlyContribution = useRef();
  const expectedReturn = useRef();
  const duration = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      currentSavings: currentSavings.current.value,
      yearlyContribution: yearlyContribution.current.value,
      expectedReturn: expectedReturn.current.value,
      duration: duration.current.value,
    };

    props.onSubmit(userInput);

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min={1}
            ref={currentSavings}
            id="current-savings"
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min={1}
            ref={yearlyContribution}
            id="yearly-contribution"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min={1}
            ref={expectedReturn}
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" min={1} ref={duration} id="duration" required />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserFormInput;
