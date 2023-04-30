import "./inputs.scss";

import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Inputs = ({ data, onData, errors, onErrors }) => {
  const [errorsDay, setErrorsDay] = useState([]);
  const [errorsMonth, setErrorsMonth] = useState([]);
  const [errorsYear, setErrorsYear] = useState([]);

  const [totalErrors, setTotalErrors] = useState([...errorsDay, ...errorsMonth, ...errorsYear]);

  // ? Temporary solution
  useEffect(() => {
    const interval = setInterval(() => {
      setErrorsDay([]);
      setTotalErrors([...errorsDay, ...errorsMonth, ...errorsYear]);
      totalErrors.length > 0 ? onErrors(true) : onErrors(false);
    }, 100);

    return () => clearInterval(interval);
  });

  const handleDayInput = (e) => {
    setErrorsDay([]);

    e.target.value <= 31 ? onData({ ...data, day: e.target.value }) : setErrorsDay([`Day can't be larger than 31`]);
  };

  const handleMonthInput = (e) => {
    setErrorsMonth([]);

    e.target.value <= 12 ? onData({ ...data, month: e.target.value }) : setErrorsMonth([`Month can't be larger than 12`]);
  };

  const handleYearInput = (e) => {
    setErrorsYear([]);

    e.target.value <= 2022 ? onData({ ...data, year: e.target.value }) : setErrorsYear([`Year can't be larger than current`]);
  };

  return (
    <>
      <div className="inputs">
        <div className="day">
          <h2>day</h2>
          <input style={{ border: errorsDay.length > 0 && "1px solid red", backgroundColor: errorsDay.length > 0 && "red" }} type="number" placeholder="DD" onChange={(e) => handleDayInput(e)} />
        </div>
        <div className="month">
          <h2>month</h2>
          <input style={{ border: errorsMonth.length > 0 && "1px solid red", backgroundColor: errorsMonth.length > 0 && "red" }} type="number" placeholder="MM" onChange={(e) => handleMonthInput(e)} />
        </div>
        <div className="year">
          <h2>year</h2>
          <input style={{ border: errorsYear.length > 0 && "1px solid red", backgroundColor: errorsYear.length > 0 && "red" }} type="number" placeholder="YYYY" onChange={(e) => handleYearInput(e)} />
        </div>
      </div>
      {errors && (
        <div className="errors">
          {totalErrors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Inputs;
