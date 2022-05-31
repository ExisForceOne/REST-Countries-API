import styled from "styled-components";

const StyledNav = styled.nav`
  margin: 40px auto;
  width: ${({ theme }) => theme.wrapper};
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  gap: 70px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: 750px) {
    font-size: 1rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function Nav(props) {
  return <StyledNav>{props.children}</StyledNav>;
}
