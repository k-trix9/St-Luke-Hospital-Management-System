import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="logo">
        🏥 St. Luke Hospital
      </div>

      <div className="nav-links">
        <NavLink to="/" className={navLinkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/patients" className={navLinkStyle}>
          Patients
        </NavLink>

        <NavLink to="/appointments" className={navLinkStyle}>
          Appointments
        </NavLink>

        <NavLink to="/billing" className={navLinkStyle}>
          Billing
        </NavLink>

        <NavLink to="/pharmacy" className={navLinkStyle}>
          Pharmacy
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;