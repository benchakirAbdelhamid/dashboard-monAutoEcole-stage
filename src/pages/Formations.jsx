import * as React from "react";
import { useState } from "react";

export default function Formation() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value); // Get the value by accessing the 'value' property of the event target
  };

  return (
    <div className="p-4 ">
      <h2 className="title"> Formation</h2>{" "}
      <br />

    </div>
  );
}
