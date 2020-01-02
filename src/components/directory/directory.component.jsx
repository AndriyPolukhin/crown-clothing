import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import sectionsData from "./directory.data";

const Directory = () => {
  const [sections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
