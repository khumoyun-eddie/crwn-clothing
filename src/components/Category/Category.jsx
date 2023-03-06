import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../ProductCard/ProductCard";
import  './Category.style.scss'
const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);
  
  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
    </div>
  );
};

export default Category;
