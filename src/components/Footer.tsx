import React from "react";
import { Input } from "../components/ui/input"; 
import { Button } from "../components/ui/button"; 
import { Checkbox } from "../components/ui/checkbox"; 
import { Label } from "../components/ui/label"; 
import Link from "next/link"; 
import { Mail, Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react"; // Ícones importados do Lucide

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Responsivo: layout em coluna para telas pequenas */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        
        {/* Div de Newsletter com Ícone à Esquerda */}
        <div className="flex flex-col md:flex-row items-center max-w-2xl justify-center md:justify-start mb-8 md:mb-0">
          <Mail className="mb-4 md:mb-0 md:mr-4 w-16 h-16 text-gray-500" />
          <div className="text-center md:text-left">
            <h2 className="uppercase text-gray-400 text-md">NEWSLETTER</h2>
            <h3 className="font-bold text-3xl max-w-md">
              Receba conteúdos inéditos e novidades gratuitamente
            </h3>
          </div>
        </div>

        {/* Seção Newsletter à direita */}
        <div className="w-full md:w-auto">
          {/* Input e botão lado a lado */}
          <div className="flex flex-col md:flex-row items-center mt-4 w-full max-w-md md:max-w-none">
            <div className="relative flex-grow w-full">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Digite seu e-mail"
                className="pl-10 bg-gray-800 text-white border border-gray-700 w-full"
              />
            </div>
            <Button className="mt-4 md:mt-0 md:ml-2 w-full md:w-auto text-white border border-purple-600 bg-gray-800 hover:bg-gray-900">
              ENVIAR
            </Button>
          </div>

          {/* Checkbox e Texto abaixo do input */}
          <div className="mt-2 w-full max-w-md mx-auto md:mx-0">
            <div className="flex items-start justify-center md:justify-start">
              <Checkbox id="email-terms" className="border-gray-700" />
              <Label htmlFor="email-terms" className="ml-2 text-gray-400">
                Autorizo o envio de comunicações por e-mail ou qualquer outro meio
                e concordo com os{" "}
                <Link href="#" className="text-purple-600 underline">
                  Termos
                </Link>{" "}
                e{" "}
                <Link href="#" className="text-purple-600 underline">
                  Políticas de privacidade
                </Link>.
              </Label>
            </div>
          </div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Seções (Sobre, Suporte, Recursos) abaixo */}
      <div className="container flex flex-col md:flex-row justify-around items-center md:items-start text-center md:text-left m-auto">
        
        {/* Sobre */}
        <div className="mb-8 md:mb-0">
          <h2 className="font-bold text-lg mb-4">SOBRE</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Políticas de privacidade
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Direitos autorais
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>

        {/* Suporte */}
        <div className="mb-8 md:mb-0">
          <h2 className="font-bold text-lg mb-4">SUPORTE</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Central de ajuda
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Comunidade Discord
              </Link>
            </li>
            <li>
              <a href="mailto:oi@leadingpage.com.br" className="hover:underline">
                oi@leadingpage.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h2 className="font-bold text-lg mb-4">RECURSOS</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Curso
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Quiz React
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Quiz Node
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Quiz JavaScript
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Seção Inferior com logo e redes sociais */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-center md:justify-around px-4 ">
        <p className="text-gray-400 mb-4 md:mb-0">Leadingpage. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=61560597991454" className="hover:opacity-75">
            <Facebook className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/andrewchucrute/" className="hover:opacity-75">
            <Instagram className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/andrewhenrique2" className="hover:opacity-75">
            <Linkedin className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="https://twitter.com/andrewhenrique2" className="hover:opacity-75">
            <Twitter className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="https://github.com/andrewhenrique2" className="hover:opacity-75">
            <Github className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
