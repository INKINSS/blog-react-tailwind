import React from "react";
import ButtonCollaborate from "../common/ButtonCollaborate";

const Collaborate = ({ color }) => {
  return (
    <section className="bg-blueDark px-8 py-12">
      <h2 className="text-white text-[2rem] font-bold drop-shadow-lg">
        Colabora
      </h2>
      <p className="text-whiteLight py-5">
        Construye un artículo basado en tu tema de interés, elaborando un
        contenido detallado y bien organizado que explore diversos aspectos y
        perspectivas del tema. Utiliza ejemplos, datos relevantes y recursos
        visuales para enriquecer la comprensión del lector.
      </p>
      <div className="flex justify-center">
        <ButtonCollaborate color="white" />
      </div>
    </section>
  );
};

export default Collaborate;
