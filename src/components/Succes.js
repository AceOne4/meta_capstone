import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Succes() {
  const nav = useNavigate();
  const clickHanler = () => nav("/");
  return (
    <div className="succes">
      <h1>Happy to See you Soon</h1>
      <p>Your Reservastion Has been Booked SuccesFully </p>
      <Button clickHanler={clickHanler}>HomePage</Button>
    </div>
  );
}

export default Succes;
