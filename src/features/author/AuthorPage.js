import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Asia Górniak"
      body={
        <>
          Cześć, mam na imię Asia! Na co dzień mieszkam w Albanii, gdzie
          prowadzę własny biznes, a w międzyczasie rozwijam swoje umiejętności
          programistyczne. Moim celem jest wejście w świat IT i rozwój w tym
          kierunku. Jednak nie samą pracą żyje człowiek! Moje serce skradły
          podróże, odkrywanie nowych miejsc, kultur i ludzi to moja prawdziwa
          pasja. A w chwilach relaksu uwielbiam spędzać czas z moimi ukochanymi
          kotami, które zawsze umilają mi dzień.
        </>
      }
    />
  </Container>
);
