import styled from "styled-components";
import { Moon } from "@styled-icons/bootstrap/Moon";

const StyledHeader = styled.header`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black; //change theme here
  padding: 50px 0;
  @media (min-width: 750px) {
    padding: 20px 0;
    font-size: 0.8rem;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: min(1000px, 90%);
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 1.35em;
`;

const Button = styled.button`
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledMoon = styled(Moon)`
  height: 20px;
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <Wrapper>
        <H1>Where in the world?</H1>
        <Button>
          <StyledMoon />
          Dark Mode
        </Button>
      </Wrapper>
    </StyledHeader>
  );
}
