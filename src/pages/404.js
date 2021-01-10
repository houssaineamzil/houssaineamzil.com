import React from "react";
import Seo from "../seo";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--white: #ffffff;
	--gray: #4F5078;
	--gray-dark: #28293D;
	--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
		"Noto Color Emoji";
}
*,
::after,
::before {
	box-sizing: border-box;
}
html {
	font-family: sans-serif;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: rgba(19, 24, 44, 0);
}
body {
	margin: 0;
	font-family: var(--font-family);
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 1.4285714286;
	color: var(--gray);
	text-align: left;
	background-color: var(--white);
}
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

class Page extends React.Component {
  // TODO: add somting better instead of this loin;
  componentDidMount() {
    console.log(`🦁`);
    console.log("This website was designed and built by Høussaine Amzil");
  }

  render() {
    return (
      <main>
        <Seo />
        <GlobalStyle />
        <Hero>
          <Container>
            <h1>404</h1>
            <p>Ooops this page does not exist</p>
          </Container>
        </Hero>
      </main>
    );
  }
}

export default Page;
