import styled from "styled-components";

const StyledNav = styled.nav`
  margin: 40px auto;
  font-size: 1.25rem;
  width: ${({ theme }) => theme.wrapper};
  display: flex;
  flex-direction: column;
  gap: 70px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
  }
`;

export default function Nav(props) {
  return <StyledNav>{props.children}</StyledNav>;
}
