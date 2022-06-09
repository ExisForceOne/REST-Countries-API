import styled from "styled-components";

const StyledNotFound = styled.div`
  margin-top: 75px;
  font-size: 1.55rem;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

export default function NotFound(props) {
  return (
    <StyledNotFound>
      <p>Sorry page not found (╯°□°）╯︵ ┻━┻</p>
    </StyledNotFound>
  );
}
