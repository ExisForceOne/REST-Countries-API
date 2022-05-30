import styled from "styled-components";
import { Moon } from "@styled-icons/bootstrap/Moon";

const StyledHeader = styled.header`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  padding: 50px 0;

  @media (min-width: 750px) {
    padding: 30px 0;
  }

  h1 {
    font-size: 1.35em;
  }

  button {
    font-size: 1.2em;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: min(1300px, 90%);
  display: flex;
  justify-content: space-between;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>Where in the world?</h1>
        <button
          onClick={() => {
            props.toogleTheme();
          }}
        >
          <Moon size={20} />
          Dark Mode
        </button>
      </Wrapper>
    </StyledHeader>
  );
}
