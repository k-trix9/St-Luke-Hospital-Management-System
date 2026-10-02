import { Link, useSearchParams } from "react-router-dom";

function Patients() {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  const patients = [
    {
      id: 1,
      name: "Jean Claude",
      age: 30,
      status: "admitted",
    },
    {
      id: 2,
      name: "Aline Mukamana",
      age: 25,
      status: "discharged",
    },
    {
      id: 3,
      name: "Eric Habimana",
      age: 40,
      status: "admitted",
    },
    {
      id: 4,
      name: "Diane Uwase",
      age: 28,
      status: "discharged",
    },
  ];

  const filteredPatients = status
    ? patients.filter((patient) => patient.status === status)
    : patients;

  return (
    <div className="page">
      <h1>Patients</h1>

      <p>
        {status
          ? `Showing patients with status: ${status}`
          : "Showing all patients"}
      </p>

      <div className="filter-buttons">
        <Link to="/patients" className="button">
          All
        </Link>

        <Link
          to="/patients?status=admitted"
          className="button"
        >
          Admitted
        </Link>

        <Link
          to="/patients?status=discharged"
          className="button"
        >
          Discharged
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.status}</td>
                <td>
                  <Link to={`/patients/${patient.id}`}>
                    View Patient
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patients;