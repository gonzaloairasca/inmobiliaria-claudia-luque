import React, { useState } from "react";
import BuscadorDePropiedades, { SearchFormData } from "./BuscadorDePropiedades";
import Card from "../cardPropiedad/Card";
import { properties } from "./properties";

export interface Property {
  id: number;
  title: string;
  operation: string;
  propertyType: string;
  location: string;
  adress: string;
  currency: string;
  description: string;
  image: string;
  price: number;
  size: number;
  bathrooms: number;
  bedrooms: number;
}

const PropertyList: React.FC = () => {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  const handleFormSubmit = (formData: SearchFormData) => {
    const filtered = properties.filter((property) => {
      const matchesOperation =
        formData.operation === "" || property.operation === formData.operation;
      const matchesPropertyType =
        formData.propertyType === "" ||
        property.propertyType === formData.propertyType;
      const matchesLocation =
        formData.location === "" || property.location === formData.location;
      const matchesCurrency =
        formData.currency === "" || property.currency === formData.currency;
      return (
        matchesOperation &&
        matchesPropertyType &&
        matchesLocation &&
        matchesCurrency
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <BuscadorDePropiedades onSubmit={handleFormSubmit} />
      {filteredProperties.length === 0 ? (
        <p>
          No se encontraron propiedades que cumplan con los criterios de
          búsqueda.
        </p>
      ) : (
        filteredProperties.map((property) => (
          <Card key={property.id} {...property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;
