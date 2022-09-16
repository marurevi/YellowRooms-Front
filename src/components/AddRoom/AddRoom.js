import React, { useState } from "react";

const AddRoom = () => {
  const formSubmitted = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form action="/" onSubmit={formSubmitted}>
      <div>
        <label>
          Photo
          <input type="text" name="photo" id="photo" />
        </label>
      </div>
      <div>
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>
      </div>
      <div>
        {" "}
        <label>
          Stars
          <input type="number" name="star" id="star" />
        </label>
      </div>
      <div>
        <label>
          Number people
          <input type="number" name="no-allowed" id="no-allowed" />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea name="description" id="description" />
        </label>
      </div>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoom;
