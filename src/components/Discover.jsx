import React from "react";
import ButtonDiscover from "../common/ButtonDiscover";

const Discover = () => {
  return (
    <section className="bg-white px-8 py-10">
      <h2 className="text-blueDark text-[2rem] font-bold drop-shadow-lg">
        Descubre
      </h2>
      <p className="text-colorGray py-5">
      Descubre temas de tu interés explorando filtros y categorías que faciliten la búsqueda y navegación, permitiéndote encontrar información relevante de manera eficiente y precisa.
      </p>
      <div className="flex justify-center">
        <ButtonDiscover color="black" />
      </div>
    </section>
  );
};

export default Discover;
