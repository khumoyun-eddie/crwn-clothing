import "./CategoryItem.styles.scss";

function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div className="category">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category__body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
