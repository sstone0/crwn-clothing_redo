import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const sections = useSelector(selectDirectorySection);
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
