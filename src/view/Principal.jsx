import React from "react";
import Welcome from "../components/Welcome";
import Section from "../components/Section";
import { MdMenu } from "react-icons/md";

const Principal = () => {
  return (
    <>
      <div className="flex justify-end px-8">
        <MdMenu size={"3em"} fill="blueDark" className="m-3" />
      </div>
      <Welcome />
      <Section
        title="colabora"
        background="blueDark"
        colorTitle="white"
        content="Construye un artículo basado en tu tema de interés, elaborando un contenido detallado y bien organizado que explore diversos aspectos y perspectivas del tema. Utiliza ejemplos, datos relevantes y recursos visuales para enriquecer la comprensión del lector."
        colorContent="white"
        contentButton="colabora"
        colorButton="white"
      />
      <Section
        title="descubre"
        background="white"
        colorTitle="blueDark"
        content="Descubre temas de tu interés explorando filtros y categorías que faciliten la búsqueda y navegación, permitiéndote encontrar información relevante de manera eficiente y precisa."
        contentButton="descubre"
        colorButton="black"
      />
    </>
  );
};

export default Principal;
