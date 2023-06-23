import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateApartment = () => {

  const navigate = useNavigate();  

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApartment = {
        title: title,
        img: img,
        pricePerDay: pricePerDay
    }

    axios.post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment)
        .then(() => {
            navigate("/apartments")
        })
        .catch(e => console.log("Error creating new apartment", e))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          name="img"
          value={img}
          placeholder="Enter img URL"
          onChange={(e) => setImg(e.target.value)}
        />

        <input
          type="number"
          min={1}
          max={1000}
          name="pricePerDay"
          value={pricePerDay}
          placeholder="Enter price"
          required={true}
          onChange={(e) => setPricePerDay(e.target.value)}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateApartment;
