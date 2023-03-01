import ProductCard from "../ProductCard/ProductCard";
import './category-preview.styles.scss'
const CategoriesPreview = ({ products, title }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {products.slice(0,4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPreview;
