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
    event.preventDefault();
    setFormData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };
  const formSubmitted = (event) => {
    event.preventDefault();
    // this will be used to submit a fom
  };

  return (
    <form action="/" onSubmit={formSubmitted}>
      <div>
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={formData.photo}
          onChange={formInputChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={formInputChange}
        />
      </div>
      <div>
        {" "}
        <label htmlFor="star">Stars</label>
        <input
          type="number"
          name="star"
          id="star"
          value={formData.star}
          onChange={formInputChange}
        />
      </div>
      <div>
        <label htmlFor="personsAllowed">Number people</label>

        <input
          type="number"
          name="personsAllowed"
          id="personsAllowed"
          value={formData.allowed}
          onChange={formInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>

        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={formInputChange}
        />
      </div>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoom;
