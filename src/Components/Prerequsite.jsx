import React from "react";
import { useNavigate } from "react-router-dom";

export const Prerequsite = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Prerequsite Page</h1>{" "}
      <form>
        <div>
          <input type="checkbox" />
          <label>Can You attend 90% of the classes</label>
        </div>
        <br />
        <div>
          <input type="checkbox" />
          <label>Do you have a laptop</label>
        </div>
      </form>
      <br />
      <button
        onClick={() => {
          navigate("/info");
        }}
      >
        Continue
      </button>
    </div>
  );
};
