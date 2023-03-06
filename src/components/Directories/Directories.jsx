import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoriesContainer } from "./Directories.styles.jsx";

const directories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

function Directories() {
  return (
    <DirectoriesContainer>
      {directories.map((directory) => (
        <DirectoryItem
          directory={directory}
          key={directory.id}
        />
      ))}
    </DirectoriesContainer>
  );
}

export default Directories;
