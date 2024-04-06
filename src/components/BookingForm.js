import React, { useState } from "react";
import Button from "./Button";

export default function BookingForm({ onsubmit, updateTimes }) {
  const [data, setData] = useState({
    date: "",
    numOfGuests: 0,
    selectedTime: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!data.date) {
      newErrors.date = "Date is required";
      isValid = false;
    }

    if (!data.selectedTime) {
      newErrors.time = "Time is required";
      isValid = false;
    }
    if (data.numOfGuests <= 0) {
      newErrors.guests = "Number Of Guests is required";
      isValid = false;
    }
    if (!data.occasion) {
      newErrors.occasion = "Occasion is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const dateHandler = (e) => {
    setData({ ...data, date: e.target.value });
  };
  const timeHandler = (e) => {
    setData({ ...data, selectedTime: e.target.value });
  };
  const occasionHandler = (e) => {
    setData({ ...data, occasion: e.target.value });
  };
  const guestsHandler = (e) => {
    setData({ ...data, numOfGuests: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const reservation = {
        date: data.date,
        time: data.selectedTime,
        numberOfGuests: data.numOfGuests,
        occasion: data.occasion,
      };
      onsubmit(reservation);
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={data.date}
            onChange={dateHandler}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={data.selectedTime}
            onChange={timeHandler}
          >
            <option>Choose Time</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          {errors.time && <p>{errors.time}</p>}
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="0"
            min="0"
            max="10"
            id="guests"
            value={data.numOfGuests}
            onChange={guestsHandler}
          />
          {errors.guests && <p>{errors.guests}</p>}
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={data.occasion}
            onChange={occasionHandler}
          >
            <option>Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errors.occasion && <p>{errors.occasion}</p>}
        </div>
        <Button type="submit">Make Your reservation</Button>
      </form>
    </div>
  );
}
