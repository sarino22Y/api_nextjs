"use client"

import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CalendarUtils = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
};

export default CalendarUtils;
