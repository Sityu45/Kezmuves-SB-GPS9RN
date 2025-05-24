import { useState } from "react";

const ProductList = () => {
  const [cakes] = useState([
    { id: 1, name: "Málnás Sajttorta", price: "1 200 Ft" },
    { id: 2, name: "Csokoládé Lava Cake", price: "1 400 Ft" },
    { id: 3, name: "Citromos Pite", price: "1 100 Ft" },
  ]);

  return (
    <div className="product-list">
      {cakes.map(cake => (
        <div key={cake.id} className="card">
          <h3>{cake.name}</h3>
          <p>Ár: {cake.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
