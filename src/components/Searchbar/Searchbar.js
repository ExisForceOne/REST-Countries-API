import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.elementsColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 500px;

  input {
    padding: 25px;
    flex: 1;
    border-radius: 8px;
  }
`;

export default function SearchBar(props) {
  return (
    <StyledSearchBar>
      <Search size={20} />
      <input type="text" placeholder="Search for a country..." name="country" id="country" />
    </StyledSearchBar>
  );
}
