import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import About from "./components/About";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <About
          name="Andressa"
          age="31"
          occupation="QA Júnior"
          company="Vai na Web Estúdio"
          theme1="testes de software"
          theme2="React.js"
        />
      </>
    );
  }
}
