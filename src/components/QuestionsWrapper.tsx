'use client';

import styled from 'styled-components';
import Questions from './Questions';

// Criando um componente Wrapper com estilos
const Wrapper = styled.div`
  background: linear-gradient(to bottom, #000000, #1a0b1a); /* Esse é o equivalente ao bg-gradient-to-b from-black to-[#1a0b1a] */
  width: 100%;
  clip-path: polygon(0 -5%, 100% 10%, 100% 100%, 0% 100%); /* Ajuste da curva */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0; /* Espaçamento interno */
`;

// Componente que será usado para envolver a seção de Questions
const QuestionsWrapper = () => {
  return (
    <Wrapper>
      <Questions />
    </Wrapper>
  );
};

export default QuestionsWrapper;
