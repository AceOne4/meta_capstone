import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import Chicago from "../components/Chicago";
import Succes from "../components/Succes";
import { fetchAPI, submitAPI } from "../API/API";
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

function BookingPage() {
  const [succes, setSucces] = useState(false);

  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  useEffect(() => {
    const initializeTimes = async () => {
      try {
        const today = new Date();
        const todayString = today.toISOString().slice(0, 10);
        const times = await fetchAPI(todayString);
        dispatch({ type: "UPDATE_TIMES", payload: times });
      } catch (error) {
        console.error("Error initializing times:", error);
      }
    };

    initializeTimes();
  }, []);
  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      dispatch({ type: "UPDATE_TIMES", payload: times });
    } catch (error) {
      console.error("Error updating times:", error);
    }
  };
  const onsubmit = async (reservation) => {
    try {
      const formSubmit = await submitAPI(reservation);
      if (formSubmit) {
        setSucces(true);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      return false;
    }
  };
  return (
    <section className="formContainer">
      {succes && <Succes />}
      <Chicago />
      <BookingForm
        onsubmit={onsubmit}
        updateTimes={updateTimes}
        availableTimes={availableTimes}
      />
    </section>
  );
}

export default BookingPage;
