import React from "react";
import style from './SectionContent.module.css'

const SectionContent = ({ children, className }) => {
  return (
    <div className={`${style.bgSection} row`}>
      <div className={`${className} col-12 h-100`}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default SectionContent;
