import {
  Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Patient Details</h1>

      <div className="patient-info">
        <h2>Patient ID: {id}</h2>
        <p>Patient information for ID {id}</p>
      </div>

      <div className="patient-menu">
        <Link to="history" className="button">
          Medical History
        </Link>

        <Link to="billing" className="button">
          Billing
        </Link>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>

      <button
        className="back-button"
        onClick={() => navigate("/patients")}
      >
        ← Back to Patients
      </button>
    </div>
  );
}

export default PatientDetail;