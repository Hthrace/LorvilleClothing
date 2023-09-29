/* eslint-disable react/prop-types */
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((c) => (
        <DirectoryItem key={c.id} catergories={c} />
      ))}
    </div>
  );
};

export default Directory;
