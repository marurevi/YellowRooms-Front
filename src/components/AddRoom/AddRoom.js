import React, { useState } from "react";
import { sendPost } from "../../API/api";
const AddRoom = () => {
  const initialFromState = {
    name: "",
    stars: 0,
    persons_allowed: 1,
    photo: "",
    description: "",
    price: 0,
    status: "",
  };
  const [formData, setFormData] = useState(initialFromState);

  const formInputChange = (event) => {
    event.preventDefault();
    setFormData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
      status: "",
    }));
  };
  const formSubmitted = async (event) => {
    event.preventDefault();
    console.log(formData);
    const status = await sendPost("rooms", formData);
    console.log(status);
    if (status.statusText === "Created") {
      setFormData({ ...initialFromState, status: "Created" });
    }
  };

  return (
    <>
      {formData.status === "Created" && <div>Room is created</div>}
      <form action="/" onSubmit={formSubmitted}>
        <div>
          <label htmlFor="photo">
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
          <label htmlFor="name">
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
          <label htmlFor="stars">
            Stars
            <input
              type="number"
              name="stars"
              id="stars"
              value={formData.stars}
              onChange={formInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="personsAllowed">
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
          <label htmlFor="description">
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
    </>
  );
};

export default AddRoom;
