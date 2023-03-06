import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';
import './CategoriesPreview.style.scss'
const CategoriesPreview = () => {
    const { categories } = useContext(CategoriesContext);

    return (
      <>
        {
          Object.keys(categories).map(title=>{
            const products = categories[title]
            return <CategoryPreview key={title} products={products} title={title}/>
          })
        }
      </>
    );
}

export default CategoriesPreview