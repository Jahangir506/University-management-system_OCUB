"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalenderBD = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <div className="w-72 mx-auto">
        <Calendar
          showWeekNumbers
          width={44}
          onChange={onChange}
          value={date}
          calendarType="islamic"
          defaultView="month"
          formatMonth
        />
      </div>
    </>
  );
};
export default CalenderBD;
