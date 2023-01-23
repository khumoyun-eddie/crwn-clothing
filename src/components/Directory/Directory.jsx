import CategoryItem from "../category-item/CategoryItem";
import "./categories.styles.scss";

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;
