import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ApartmentDetails = () => {
  const { id } = useParams();

  console.log(id)

  const [apartmentDetails, setApartmentDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apartments/${id}`)
      .then((response) => setApartmentDetails(response.data))
      .catch((e) => console.log("Error getting details from the API", e));
  }, []);

  return (
    <div>
      <img src={apartmentDetails.img} alt={apartmentDetails.title} />
      <h2>{apartmentDetails.title}</h2>
      <h2>Price: {apartmentDetails.pricePerDay}</h2>
      <hr />
      <p>
        <Link to="/apartments">Back</Link>
      </p>
    </div>
  );
};

export default ApartmentDetails;
