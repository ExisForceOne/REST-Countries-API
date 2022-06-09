import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

const StyledSearchBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 25px;
  max-width: 500px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.elementsColor};
  box-shadow: ${({ theme }) => theme.boxShadow};

  input {
    padding: 25px;
    flex: 1;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export default function SearchBar({ searchParam, setSearchParam }) {
  return (
    <StyledSearchBar>
      <Search size={20} />
      <input
        type="text"
        placeholder="Search for a country..."
        name="country"
        id="country"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
      />
    </StyledSearchBar>
  );
}
