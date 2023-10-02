import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ catergories }) => {
  const { title, imageUrl, route } = catergories;
  const navigate = useNavigate();
  const gotTo = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={gotTo}>
      <BackgroundImage $imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
