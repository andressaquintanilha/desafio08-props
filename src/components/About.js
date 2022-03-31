import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: lightcyan;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Salutation = styled.h1`
  font-size: 60px;
  display: flex;
  margin-bottom: 40px;
  font-weight: bold;
`;

const Text1 = styled.h2`
  font-size: 30px;
  display: flex;
`;

const Text2 = styled.h2`
  font-size: 30px;
  display: flex;
`;

export default function About({
  name,
  age,
  occupation,
  company,
  theme1,
  theme2
}) {
  return (
    <Container>
      <Salutation>Olá, muito prazer!</Salutation>
      <Text1>
        Me chamo {name}, tenho {age} anos e atuo como {occupation} na empresa{" "}
        {company}.
      </Text1>
      <Text2>
        Atualmente estudo sobre {theme1} e {theme2}. Ambos assuntos estão
        relacionados com tecnologia.
      </Text2>
    </Container>
  );
}
