import { useContext } from "react";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import { ProductsContext } from "../../contexts/productContext";
import "./shop.styles.scss";
const Shop = () => {
  const { categories } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {
        Object.keys(categories).map(title=>{
          const products = categories[title]
          return <CategoriesPreview key={title} products={products} title={title}/>
        })
      }
    </div>
  );
};
export default Shop;
