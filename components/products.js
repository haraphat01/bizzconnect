import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
    {
      name: "Product 1",
      picture: "product1.jpg",
      price: "$1000",
      location: "New York",
      revenue: "$5000",
      amount: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Product 2",
      picture: "product2.jpg",
      price: "$1500",
      location: "San Francisco",
      revenue: "$7000",
      amount: 8,
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
export const Products = () => {
  

  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            className="flex justify-between w-full p-4 text-left bg-gray-100 rounded-md dark:bg-trueGray-800"
          >
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <ChevronDownIcon className={`${openAccordion === index ? "transform rotate-180" : ""} w-6 h-6`} />
          </button>
          {openAccordion === index && (
            <div className="p-4 bg-gray-200 dark:bg-trueGray-700">
              <img src={product.picture} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <p>Price: {product.price}</p>
              <p>Location: {product.location}</p>
              <p>Revenue: {product.revenue}</p>
              <p>Amount: {product.amount}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;





