import styled from "styled-components";
import { Input, InputLabel } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

interface InputsProps {
  form: {
    day: string;
    month: string;
    year: string;
  };

  setForm: Dispatch<
    SetStateAction<{
      day: string;
      month: string;
      year: string;
    }>
  >;
}

const Inputs = ({ form, setForm }: InputsProps): JSX.Element => {
  return (
    <>
      <Container>
        <div>
          <InputLabel>Day</InputLabel>
          <Input
            placeholder='DD'
            value={form.day}
            onChange={(e) => {
              setForm({ ...form, day: e.target.value });
            }}
          />
        </div>
        <div>
          <InputLabel>Month</InputLabel>
          <Input
            placeholder='MM'
            value={form.month}
            onChange={(e) => {
              setForm({ ...form, month: e.target.value });
            }}
          />
        </div>
        <div>
          <InputLabel>Year</InputLabel>
          <Input
            placeholder='YYYY'
            value={form.year}
            onChange={(e) => {
              setForm({ ...form, year: e.target.value });
            }}
          />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 793px) {
    width: 343px;
    gap: 16px;
  }
`;

export default Inputs;
