import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/apartments">Apartments</NavLink> |
        <NavLink to="/apartments/:id">Apartment details</NavLink>|
        <NavLink to="/apartments/create">Create apartment</NavLink>
      </nav>
    )
}

export default NavBar;