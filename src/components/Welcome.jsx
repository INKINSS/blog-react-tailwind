import React from "react";
import ButtonPrincipal from "../common/ButtonCollaborate";
import ButtonCollaborate from "../common/ButtonCollaborate";
import ButtonDiscover from "../common/ButtonDiscover";

const Welcome = () => {
  return (
    <section className="px-8 pt-10">
      <h1 className="text-blueDark text-[4rem] font-bold drop-shadow-lg text-center">
        llcoment
      </h1>
      <p className="text-colorText text-center">
        Explora y crea en un sitio dedicado al desarrollo web
        <strong>encuentra</strong> conocimientos frescos y
        <strong>comparte</strong> tu pasión por la programación y el diseño.
      </p>
      <div className="space-x-5 py-10 flex justify-center">
        <ButtonCollaborate color="black" />
        <ButtonDiscover color="black" />
      </div>
    </section>
  );
};

export default Welcome;
