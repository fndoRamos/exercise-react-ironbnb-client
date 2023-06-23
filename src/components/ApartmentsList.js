import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ApartmentsList = () => {

    console.log("apartments list component is mounted")

    const [apartments, setApartment] = useState([])

    useEffect(() => {
        getApartmentsFromApi();
        return () => console.log("apartment list component is unmounted")
    }, [])

    const getApartmentsFromApi = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/apartments`)
            .then(response => {
                setApartment(response.data)
            })
            .catch(e => console.log("Error getting apartments list from the API", e))
    }

    if (apartments.length === 0 ) {
        return <p>Loading....</p>
    } else {
        return (
            apartments.map(apartmentObj => {
                return (
                    <div key={apartmentObj._id}>
                        <img src={apartmentObj.img} alt={apartmentObj.title} />
                        <h2>{apartmentObj.title}</h2>
                        <h2>Price: {apartmentObj.pricePerDay}</h2> <br />
                        <Link to={`/apartments/${apartmentObj._id}`}>More details</Link>
                        <hr />
                    </div>
                )
            })
        )
    }
    
}

export default ApartmentsList;