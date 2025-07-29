import React from "react";

const PageTitle = ({ title }) => {
  return (
    <section className="relative h-[50vh] overflow-hidden z-0">
      <div
        className={`absolute -inset-0 z-0 bg-auto bg-center will-change-transform`}
        style={{ backgroundImage: 'url("/images/skulls.png")' }}
      />
      <div className="relative z-10 h-full flex items-center justify-center containerBody text-center">
        <h1 className="h1 text-teritary">{title}</h1>
      </div>
    </section>
  );
};

export default PageTitle;
