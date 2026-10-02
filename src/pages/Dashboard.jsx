function Dashboard() {
  return (
    <div className="page">
      <h1>Hospital Dashboard</h1>

      <p>
        Welcome to St. Luke Hospital Management System.
      </p>

      <div className="cards">
        <div className="card">
          <h2>120</h2>
          <p>Total Patients</p>
        </div>

        <div className="card">
          <h2>25</h2>
          <p>Appointments</p>
        </div>

        <div className="card">
          <h2>15</h2>
          <p>Pending Bills</p>
        </div>

        <div className="card">
          <h2>85</h2>
          <p>Available Drugs</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;