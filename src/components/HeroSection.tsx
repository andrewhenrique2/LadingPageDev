"use client";
import React from "react";
import Image from "next/image";
import banner from "../../public/banner.png";
import Form from "./form";

const HeroSection = () => {
  return (
    <div className="text-center relative font-sans">
      <div className="relative">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-auto"
          style={{ animation: "fadeIn 2s ease-in-out" }} // Animação fadeIn
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b000b] via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Primeiro título com animação de subida */}
      <div className="container max-w-3xl mt-24 m-auto text-center flex justify-center items-center">
        <h1
          className="text-white text-5xl max-w-7xl font-bold"
          style={{ animation: "slideUp 1.5s ease-in-out" }} // Animação de subida
        >
          Sua jornada de{" "}
          <span className="bg-gradient-to-purple-blue bg-clip-text text-transparent animate-gradient-move">
            aprendizado contínuo
          </span>{" "}
          em programação
        </h1>
      </div>

      {/* Segundo título com animação de subida */}
      <div className="container mx-auto pt-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h1
            className="text-white text-4xl max-w-7xl font-bold mb-4"
            style={{ animation: "slideUp 1.5s ease-in-out" }} // Animação de subida
          >
            Descubra tudo o que você precisa para conquistar seu primeiro{" "}
            <span className="bg-gradient-blue-dark-purple bg-clip-text text-transparent">
              emprego e dominar as principais tecnologias do mundo digital.
            </span>
          </h1>

          <p
            className="text-gray-400 mb-8 max-w-4xl pt-6 text-lg leading-[28px]"
            style={{ animation: "fadeIn 2s ease-in-out" }} // Animação de fade-in
          >
            Se você é um iniciante ou alguém que está procurando aperfeiçoar
            suas habilidades no campo do desenvolvimento de software, você está
            no lugar certo. Vamos guiá-lo através de cada etapa, desde a
            aprendizagem dos conceitos básicos até a aplicação prática em
            projetos reais.
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default HeroSection;
