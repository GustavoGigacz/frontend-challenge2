import styled from "styled-components";
import { ResultText } from "./styles";

const Display = (): JSX.Element => {
  return (
    <>
      <div>
        <ResultText>
          <strong>17</strong>years
        </ResultText>
        <ResultText>
          <strong>0</strong>months
        </ResultText>
        <ResultText>
          <strong>26</strong>days
        </ResultText>
      </div>
    </>
  );
};

export default Display;
