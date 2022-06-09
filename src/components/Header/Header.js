import styled from "styled-components";
import { Moon } from "@styled-icons/bootstrap/Moon";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 50px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};

  @media (min-width: 750px) {
    padding: 30px 0;
  }

  h1 {
    font-size: 1.35em;
  }

  button {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: ${({ theme }) => theme.wrapper};
  gap: 10px;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <Wrapper>
        <Link to={"/"}>
          <h1>Where in the world?</h1>
        </Link>
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
