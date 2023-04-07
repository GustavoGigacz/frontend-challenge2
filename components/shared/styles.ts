import styled from "styled-components";

export const InputLabel = styled.label`
  display: block;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: var(--light-grey);

  margin-bottom: 8px;

  @media (max-width: 793px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;

  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  gap: 16px;

  width: 160px;

  border: 1px solid #dcdcdc;
  border-radius: 8px;

  font-size: 32px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  outline: none;

  :hover {
    outline: 1px solid rgba(133, 77, 255, 1);
  }

  @media (max-width: 793px) {
    width: 88px;
    height: 54px;
  }
`;

export const ResultText = styled.p`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 800;
  font-size: 104px;
  line-height: 110%;

  strong {
    color: #854dff;
    padding-right: 8px;
  }

  @media (max-width: 793px) {
    font-size: 56px;
  }
`;
