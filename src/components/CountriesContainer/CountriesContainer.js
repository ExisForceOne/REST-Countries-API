import styled from "styled-components";

const StyledGridContainer = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.wrapper};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 55px;
`;

export default function CountriesContainer(props) {
  return <StyledGridContainer>{props.children}</StyledGridContainer>;
}
