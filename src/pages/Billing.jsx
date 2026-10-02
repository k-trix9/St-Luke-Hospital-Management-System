function Billing() {
  return (
    <div className="page">
      <h1>Billing</h1>

      <div className="cards">
        <div className="card">
          <h2>45,000 RWF</h2>
          <p>Total Payments</p>
        </div>

        <div className="card">
          <h2>15,000 RWF</h2>
          <p>Pending Payments</p>
        </div>

        <div className="card">
          <h2>30</h2>
          <p>Paid Bills</p>
        </div>
      </div>
    </div>
  );
}

export default Billing;