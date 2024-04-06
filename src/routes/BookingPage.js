import React, { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import Chicago from "../components/Chicago";
import Succes from "../components/Succes";

const UPDATE_TIMES = "UPDATE_TIMES";
const timesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TIMES:
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

function BookingPage() {
  const [succes, setSucces] = useState(false);
  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    initializeTimes
  );
  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  function updateTimes() {
    dispatchTimes({ type: UPDATE_TIMES });
  }
  const onsubmit = (reservation) => {
    if (reservation) {
      console.log(reservation);
      setSucces(true);
    }
  };

  return (
    <section className="formContainer">
      {succes && <Succes />}
      <Chicago />
      <BookingForm onsubmit={onsubmit} updateTimes={updateTimes} />
    </section>
  );
}

export default BookingPage;
