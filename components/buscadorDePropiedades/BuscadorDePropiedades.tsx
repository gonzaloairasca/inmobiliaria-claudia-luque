import React, { useState } from "react";

interface SearchFormProps {
  onSubmit: (formData: SearchFormData) => void;
}

export interface SearchFormData {
  operation: string;
  propertyType: string;
  location: string;
  currency: string;
}

const BuscadorDePropiedades: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [operation, setOperation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [currency, setCurrency] = useState("");

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value);
  };

  const handlePropertyTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyType(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: SearchFormData = {
      operation,
      propertyType,
      location,
      currency,
    };
    onSubmit(formData);
    console.log(formData);
  };
  return (
    <section>
      <h2>Buscar Propiedades</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="operation">Tipo de operación:</label>
          <select
            id="operation"
            value={operation}
            onChange={handleOperationChange}
          >
            <option value="">Todos</option>
            <option value="alquiler">Alquiler</option>
            <option value="venta">Venta</option>
          </select>
        </div>
        <div>
          <label htmlFor="property-type">Tipo de propiedad:</label>
          <select
            id="property-type"
            value={propertyType}
            onChange={handlePropertyTypeChange}
          >
            <option value="">Todos los tipos</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="ph">PH</option>
            <option value="terreno">Terreno</option>
          </select>
        </div>
        <div>
          <label htmlFor="location">Ubicación:</label>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Todas las ubicaciones</option>
            <option value="moreno centro">Moreno Centro</option>
            <option value="trujui">Trujui</option>
            <option value="las catones">Las Catones</option>
            <option value="el fondo">El Fondo</option>
          </select>
        </div>
        <div>
          <label htmlFor="currency">Tipo de moneda:</label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="">Cualquier moneda</option>
            <option value="pesos">Pesos</option>
            <option value="dolares">Dólares</option>
          </select>
        </div>
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default BuscadorDePropiedades;
