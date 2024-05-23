import React from "react";

const PricingCard = ({ title, type, price, features, isFeatured }) => {
  return (
    <div
      className={`w-full md:w-1/3 p-4 ${
        isFeatured ? "bg-blue-700 text-white" : "bg-white text-gray-800"
      } rounded-lg shadow-lg`}
    >
      <div
        className={`text-center p-4 ${
          isFeatured ? "bg-blue-900 text-white" : "bg-blue-600 text-white"
        } rounded-t-lg`}
      >
        <h3 className="text-xl font-bold">{type}</h3>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`${
                feature.included
                  ? "text-blue-500"
                  : "text-gray-400 line-through"
              } flex items-center`}
            >
              <span className="ml-2">{feature.text}</span>
            </li>
          ))}
        </ul>
        <div className="text-2xl font-bold">MAD {price}</div>
      </div>
    </div>
  );
};

export default PricingCard;
