import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            type="text"
            id="name"
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            type="text"
            id="name"
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
