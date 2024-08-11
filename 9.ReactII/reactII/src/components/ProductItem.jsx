import React from 'react';

const ProductItem = ({ product }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.954a1 1 0 00.95.69h4.144a1 1 0 01.593 1.805l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.954a1 1 0 01-1.536 1.118L10 13.708l-3.857 2.8a1 1 0 01-1.536-1.118l1.286-3.954a1 1 0 00-.364-1.118l-3.357-2.44a1 1 0 01.593-1.805h4.144a1 1 0 00.95-.69l1.286-3.954z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-contain" src={product.image} alt={product.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex items-center mt-2">
          {renderStars(Math.round(product.rating.rate))}
          <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
        </div>
        <p className="text-gray-700 mt-2 line-clamp-3">
          {product.description}
        </p>
        <p className="text-green-500 mt-4 text-lg font-bold">${product.price}</p>
        <div className="flex justify-center mt-4">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
