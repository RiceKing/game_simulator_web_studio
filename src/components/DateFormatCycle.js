import React from 'react';

const DateFormatCycle = ({day=1}) => {
  const maxDay = 30;
  const maxMonth = 12;

  let month = Math.floor(day / maxDay)
  let year = Math.floor(month / maxMonth)

  let beautifulMonth = Math.round(
    (month<=maxMonth) ? month :
    (month - maxMonth*(!year ? 1 : year))
  )

  let beautifulDay = Math.floor(
    (day<maxDay) ? day :
    day - maxDay*(month)
  )

  return (
    <div className="date-format-cycle">
      <p>Year: {year}</p>
      <p>Month: {beautifulMonth}</p>
      <p>Day: {beautifulDay}</p>
    </div>
  )
}

export default DateFormatCycle;
