import styled from "styled-components";
import Arrow from "../icons/Arrow";

const Button = (): JSX.Element => {
  return (
    <>
      <Container>
        <Hr />
        <ArrowButton>
          <Arrow />
        </ArrowButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 793px) {
    padding: 32px 0;
  }
`;

const Hr = styled.hr`
  display: block;
  flex-grow: 1;
  height: 1px;
  border: none;
  background-color: rgba(220, 220, 220, 1);

  /* @media (max-width: 1100px) {
    grid-area: "center";
  } */
`;

const ArrowButton = styled.button`
  padding: 24px;
  background-color: var(--purple);
  border-radius: 100%;

  :hover {
    cursor: pointer;
    background-color: var(--greyblack);
  }

  svg {
    @media (max-width: 793px) {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1100px) {
    padding: 16px;
  }
`;

export default Button;
