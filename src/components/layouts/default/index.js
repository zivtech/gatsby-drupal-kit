import React from "react";
import Header from "../global/header";
import Footer from "../global/footer";
import styled from "styled-components";


const BodyWrapper = styled.div`
  align-items: center;
  justify-content: center;
  h1,
  h2,
  h3,
  h4 {
    font-family: "Montserrat", sans-serif;
  }
`;

const PageWrapper = styled.div`
  margin: 3em auto;
  clear: both;
  max-width: 960px;
`;

const MainContentWrapper = styled.div`
  clear: both;
  margin: 3rem auto;
`;

const HeaderWrapper = styled(Header)`
  clear: both;
  margin: 3rem auto;
  max-width: 1200px;
`;

const DefaultLayout = props => {
  return (
    <BodyWrapper>
      <HeaderWrapper />
      <PageWrapper>
        <MainContentWrapper>{props.children}</MainContentWrapper>
      </PageWrapper>
      <Footer />
    </BodyWrapper>
  );
};

export default DefaultLayout;
