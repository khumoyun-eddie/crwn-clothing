import { useNavigate } from "react-router-dom";
import "./DirectoryItem.styles.jsx";
import { BackgroundImage, Directory, DirectoryBody } from "./DirectoryItem.styles.jsx";

function DirectoryItem({ directory }) {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate()
  const onNavigateHandler = ()=>navigate(route)
  
  return (
    <Directory onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryBody>
    </Directory>
  );
}

export default DirectoryItem;
