import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className="mx-auto">
      <h1 className="font-bold text-2xl my-5">To-Do Calendar </h1><hr />
      <div className="flex justify-center">
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
      />
      </div>
      <p><b>You have select:</b> {format(date, 'PP')}</p>
    </div>
  );
};

export default Calendar;
