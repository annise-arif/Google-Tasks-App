import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className="mx-auto">
      <h1 className="font-bold text-lg my-5">Calendar</h1>
      <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
      />
      </div>
      <p>Have you selected: {format(date, 'PP')}</p>
    </div>
  );
};

export default Calendar;
