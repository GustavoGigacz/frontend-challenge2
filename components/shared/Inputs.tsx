import styled from "styled-components";
import { Input, InputLabel } from "./styles";

const Inputs = (): JSX.Element => {
  return (
    <>
      <Container>
        <div>
          <InputLabel>Day</InputLabel>
          <Input />
        </div>
        <div>
          <InputLabel>Month</InputLabel>
          <Input />
        </div>
        <div>
          <InputLabel>Year</InputLabel>
          <Input />
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
