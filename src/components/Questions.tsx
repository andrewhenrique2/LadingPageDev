"use client"; // necessário no Next.js para interagir com o navegador

import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Card } from "../components/ui/card";
import Image from 'next/image';
import faq from '../../public/faq.png';

const Questions = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* Card com cor de fundo personalizada */}
      <Card className="p-8 max-w-6xl border-none w-full bg-[#1c212c80] shadow-lg rounded-lg">
        {/* Div Pai centralizada no meio da tela */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Coluna esquerda: Título e descrição */}
          <div className="flex-shrink-0 max-w-xl">
            <Image src={faq} alt="FAQ" className="w-20 h-20 rounded-md filter brightness-0 invert bg-transparent" />
            <h1 className="text-4xl font-bold text-white ">
              Perguntas e respostas mais frequentes
            </h1>
          </div>

          {/* Coluna direita: Perguntas frequentes com largura definida */}
          <div className="max-w-lg">
            <Accordion type="single" collapsible className='w-[480px]'>
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  01. O que é a Ladingpage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  A Ladingpage é uma plataforma projetada para fornecer soluções de alta qualidade para criação de páginas web otimizadas e de conversão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  02. Para quem é?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  A plataforma é ideal para empresas e profissionais que buscam criar páginas de alta conversão de forma rápida e eficiente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  03. O que você encontra na plataforma?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Você encontra ferramentas para a criação de páginas personalizadas, templates otimizados e integrações com serviços de marketing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  04. Como funciona a assinatura?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  A assinatura permite acesso completo a todas as funcionalidades da plataforma, incluindo atualizações e suporte prioritário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  05. Por onde começo a usar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Você pode começar selecionando um dos templates disponíveis ou criando uma página personalizada desde o início.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  06. Qual a duração dos planos?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Os planos são baseados em assinaturas mensais ou anuais, com a opção de renovação automática.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  07. Qual o valor?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  O valor varia de acordo com o plano escolhido. Oferecemos planos acessíveis para pequenos negócios e opções avançadas para grandes empresas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  08. Tem suporte técnico?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Sim, oferecemos suporte técnico 24/7 via chat e email para todos os assinantes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  09. E se eu não gostar da plataforma?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Você pode cancelar sua assinatura a qualquer momento. Garantimos reembolso integral nos primeiros 30 dias se você não estiver satisfeito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="flex justify-between text-xl text-gray-300 border-b border-gray-700 py-4">
                  10. Ainda estou com dúvidas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-2">
                  Se você ainda tiver dúvidas, pode entrar em contato com nosso time de suporte ou visitar nossa central de ajuda para mais informações.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Questions;
