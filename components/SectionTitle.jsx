import React from "react";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={` px-0 md:px-0 text-center ${className}`}>
      {subtitle && (
        <h5 className="body-small font-bold text-effect uppercase">
          {subtitle}
        </h5>
      )}
      <h1 className="h4 font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
