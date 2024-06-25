import React from "react";
import Button from "../common/Button";

const Section = ({
  background,
  title,
  colorTitle,
  content,
  colorContent,
  contentButton,
  colorButton,
}) => {
  return (
    <section className={`bg-${background} px-8 py-8`}>
      <h2 className={`text-${colorTitle} text-[2rem] font-bold drop-shadow-lg`}>
        {title}
      </h2>
      <p className={`text-${colorContent} py-5`}>{content}</p>
      <div className="flex justify-center">
        <Button contentButton={contentButton} colorButton={colorButton} />
      </div>
    </section>
  );
};

export default Section;
