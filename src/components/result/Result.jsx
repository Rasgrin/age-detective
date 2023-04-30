import "./result.scss";

/* eslint-disable react/prop-types */
const Result = ({ data, errors }) => {
  const today = new Date();
  const todayData = { day: today.getDate(), month: today.getMonth() + 1 + 12, year: today.getFullYear() - 1 };
  const difference = { years: todayData.year - data.year, months: Math.abs(data.month - todayData.month), days: Math.abs(data.day - todayData.day) };

  const checkMonths = (months) => {
    if (months >= 12) {
      difference.years++;
      return months - 12;
    }
    return months;
  };

  return (
    <div className="result">
      {/* {JSON.stringify(difference)} */}
      {errors ||
        (data.year && data.month && data.day && data.year.length >= 3 ? (
          <>
            <h1>
              You are <span>{data.year && data.year.length > 3 ? difference.years : "--"}</span> years,
            </h1>
            {difference.months > 0 && (
              <h1>
                <span>{data.month ? checkMonths(difference.months) : "--"}</span> months
              </h1>
            )}
            <h1>
              and <span>{data.day ? difference.days : "--"}</span> days old.
            </h1>
          </>
        ) : (
          <div className="empty">
            <h1>Please enter a date of birth.</h1>
          </div>
        ))}
    </div>
  );
};

export default Result;
