import React, { useState } from "react";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    name: "",
    star: 0,
    personsAllowed: 1,
    photo: "",
    description: "",
    price: 0,
  });

  const formInputChange = (event) => {
    setFormData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
    event.preventDefault();
    event.target.name;
  };
  const formSubmitted = (event) => {
    event.preventDefault();
    // this will be used to submit a fom
  };

  return (
    <form action="/" onSubmit={formSubmitted}>
      <div>
        <label>
          Photo
          <input
            type="text"
            name="photo"
            id="photo"
            value={formData.photo}
            onChange={formInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={formInputChange}
          />
        </label>
      </div>
      <div>
        {" "}
        <label>
          Stars
          <input
            type="number"
            name="star"
            id="star"
            value={formData.star}
            onChange={formInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Number people
          <input
            type="number"
            name="personsAllowed"
            id="personsAllowed"
            value={formData.allowed}
            onChange={formInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={formInputChange}
          />
        </label>
      </div>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoom;
