import { Link, useSearchParams } from "react-router-dom";

function Pharmacy() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const drugs = [
    {
      id: 1,
      name: "Amoxicillin",
      category: "antibiotics",
      quantity: 50,
    },
    {
      id: 2,
      name: "Paracetamol",
      category: "painkillers",
      quantity: 100,
    },
    {
      id: 3,
      name: "Ciprofloxacin",
      category: "antibiotics",
      quantity: 40,
    },
    {
      id: 4,
      name: "Ibuprofen",
      category: "painkillers",
      quantity: 80,
    },
  ];

  const filteredDrugs = category
    ? drugs.filter((drug) => drug.category === category)
    : drugs;

  return (
    <div className="page">
      <h1>Pharmacy Inventory</h1>

      <p>
        {category
          ? `Showing category: ${category}`
          : "Showing all drugs"}
      </p>

      <div className="filter-buttons">
        <Link to="/pharmacy" className="button">
          All
        </Link>

        <Link
          to="/pharmacy?category=antibiotics"
          className="button"
        >
          Antibiotics
        </Link>

        <Link
          to="/pharmacy?category=painkillers"
          className="button"
        >
          Painkillers
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Drug</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {filteredDrugs.map((drug) => (
              <tr key={drug.id}>
                <td>{drug.id}</td>
                <td>{drug.name}</td>
                <td>{drug.category}</td>
                <td>{drug.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pharmacy;