import * as React from "react";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel"; // Importa o Carousel com embla

// Importando as imagens diretamente com caminhos relativos
import acessibilidade from '../../public/acessibilidade.webp';
import carreiraInternacional from '../../public/carreira-internacional.webp';
import cleanCode from '../../public/clean-code.webp';
import electron from '../../public/electron.webp';
import figmaForDevs from '../../public/figma-for-devs.webp';
import iasDaRocketseat from '../../public/ias-da-rocketseat.webp';
import miniCursoJava from '../../public/mini-curso-java.webp';
import nitroDesign from '../../public/nitro-design.webp';
import produto from '../../public/produto.webp';
import seoParaDev from '../../public/seo-para-dev.webp';

const CarouselCourses = () => {
  // Lista de imagens para exibir no Carousel
  const images = [
    iasDaRocketseat,
    figmaForDevs,
    nitroDesign,
    produto,
    electron,
    carreiraInternacional,
    cleanCode,
    acessibilidade,
    miniCursoJava,
    seoParaDev,
  ];

  return (
    <div className="container mx-auto py-10 pt-32 flex justify-center items-center flex-col">
      {/* Título do componente */}
      <h1 className="text-4xl font-bold text-white mb-8 text-center font-sans">
        Além das formações, ganhe acesso a diversos cursos
      </h1>
      
      {/* Descrição do conteúdo */}
      <p className="text-gray-400 mb-8 max-w-4xl font-sans text-lg leading-[28px]">
        Uma seleção de cursos disponíveis para você.
      </p>

      {/* Container do Carousel */}
      <div className="relative w-full max-w-screen-lg">
        {/* Componente Carousel */}
        <Carousel
          opts={{
            align: "start", // Alinhamento do conteúdo no Carousel
            loop: false,    // O Carousel não dá loop infinito
          }}
          className="w-full"
        >
          <CarouselContent className="flex">
            {/* Renderização de cada imagem dentro do Carousel */}
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="flex-shrink-0 w-full md:basis-1/3 px-4"
              >
                <div className="w-full h-auto flex items-center justify-center relative">
                  {/* Componente de imagem do Next.js */}
                  <Image
                    src={image}
                    alt={`Curso ${index + 1}`} // Texto alternativo dinâmico para acessibilidade
                    className="rounded-lg shadow-lg"
                    width={1080} 
                    height={720} 
                    objectFit="fill" 
                    quality={100} 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Botões de navegação do Carousel */}
          <div className="absolute bottom-[-50px] left-[50%] flex space-x-2">
            {/* Botão anterior do Carousel */}
            <CarouselPrevious className="rounded-full bg-white p-2 shadow-lg" />
            {/* Botão próximo do Carousel */}
            <CarouselNext className="rounded-full bg-white p-2 shadow-lg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCourses;
