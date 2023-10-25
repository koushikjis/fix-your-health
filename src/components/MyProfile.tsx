import React, { ChangeEvent, useState } from "react";
import Spacer from "./Spacer";

const MyProfile = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  function handleHeight(event: ChangeEvent<HTMLInputElement>): void {
    setHeight(event.target.value);
  }
  function handleWeight(event: ChangeEvent<HTMLInputElement>): void {
    setWeight(event.target.value);
  }

  return (
    <div className="container mt-4">
      <p>You don't have any profile with us. Why not create one!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 mb-3 border-bottom border-primary rounded">
          <div className="form-group m-3">
            <label>Your height:</label>
            <input
              className="form-control input-padding"
              type="string"
              value={height}
              onChange={handleHeight}
            />
            <Spacer />
            <label>Your weight:</label>
            <input
              className="form-control input-padding"
              type="string"
              value={weight}
              onChange={handleWeight}
            />
            <Spacer />
            <label>Your weight:</label>
            <input
              className="form-control input-padding"
              type="string"
              value={weight}
              onChange={handleWeight}
            />
          </div>
          <button className="btn btn-primary m-3" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
