import React, { useState } from "react";
import BuscadorDePropiedades, { SearchFormData } from "./BuscadorDePropiedades";
import { properties } from "./properties";

export interface Property {
  id: number;
  title: string;
  operation: string;
  propertyType: string;
  location: string;
  currency: string;
  description: string;
  image: string;
  price: number;
  size: number;
  bathrooms: number;
}

const PropertyCard: React.FC<Property> = ({
  id,
  title,
  operation,
  propertyType,
  location,
  currency,
  image,
  description,
  price,
  bathrooms,
}) => {
  return (
    <div>
      <h2>{`${operation} - ${propertyType} en ${location}`}</h2>
      <p>{`Precio: ${price} ${currency}`}</p>
      <p>{`Habitaciones: ${bathrooms}`}</p>
      <p>{`Baños: ${bathrooms}`}</p>
    </div>
  );
};

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
          <PropertyCard key={property.id} {...property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;
