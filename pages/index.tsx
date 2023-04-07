import { Inter } from "next/font/google";
import styled from "styled-components";

import Inputs from "../components/shared/Inputs";
import Button from "../components/shared/Button";
import Display from "../components/shared/Display";
import { FormEventHandler, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [form, setForm] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("formulario enviado");
  };

  return (
    <>
      <Section>
        <Container>
          <form onSubmit={handleSubmit}>
            <Inputs form={form} setForm={setForm} />
            <Button />
          </form>
          <Display />
        </Container>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100%;
  background-color: #f0f0f0;

  display: grid;
  place-items: center;
`;

const Container = styled.div`
  width: 784px;
  padding: 56px;

  background-color: var(--white);
  border-radius: 24px 24px 200px 24px;

  @media (max-width: 1100px) {
    width: 600px;
  }

  @media (max-width: 793px) {
    width: 343px;
  }
`;

// const CustomHr = styled.hr`
//   height: 1px;
//   border: none;
//   background-color: rgba(220, 220, 220, 1);
// `;
