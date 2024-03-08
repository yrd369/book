import { useEffect, useState } from "react";

const Card = ({ name, author, desc, id }) => {
  const handleDel = async() => {
    
  };
  return (
    <div className="bg-gray-200 p-5 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>{author}</p>
        <p>{desc}</p>
        <p>{id}</p>
      </div>
      <div className="space-x-3">
        <button
          className="bg-red-500 text-white px-3 py-1  rounded"
          onClick={handleDel}
        >
          Delete
        </button>
        <button className="bg-gray-500 text-white px-3 py-1 rounded">
          Edit
        </button>
      </div>
    </div>
  );
};
export default Card;
