import React from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="my-4 text-3xl font-bold text-primary-500">{title}</h2>
        <p className="">{paragraph}</p>
      </div>
    </>
  );
};

export default SectionTitle;
