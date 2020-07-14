import React from "react";
import "./CategorySection.css";
import SingleCategory from "../SingleCategory";

const CategorySection = () => {
  return (
    <div className="category row mx-auto">
      <SingleCategory
        to="android"
        imageSrc="https://images.unsplash.com/photo-1521939094609-93aba1af40d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
        title="Android"
      />
      <SingleCategory
        to="laptop"
        imageSrc="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        title="Laptop"
      />
      <SingleCategory
        to="camera"
        imageSrc="https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        title="Camera"
      />
    </div>
  );
};

export default CategorySection;
