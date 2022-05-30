import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";
import { ArrowIosDownward as Arrow } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { useState } from "react";

const StyledNav = styled.nav`
  margin: 40px auto;
  width: min(1300px, 90%);
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

const SearchBar = styled.div`
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

const Select = styled.button`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  font-weight: 600;
  padding: 25px 35px;
  max-width: 320px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.elementsColor};

  svg {
    height: 25px;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  right: 0;
  padding: 25px 0;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.elementsColor};
  list-style: none;
  bottom: -10px;
  transform: translateY(100%);

  li {
    text-align: left;
    padding: 0px 35px;
  }
`;

const StyledArrow = styled(Arrow)`
  transform: ${(props) => (props.rotated ? "rotate(180deg)" : "rotate(0)")};
`;

export default function Nav(props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <StyledNav>
      <SearchBar>
        <Search size={20} />
        <input type="text" placeholder="Search for a country..." name="country" id="country" />
      </SearchBar>
      <Select
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        Filter by Region
        <StyledArrow rotated={showOptions} />
        {showOptions ? (
          <OptionsList
            onClick={(e) => {
              console.log(e.target.textContent.toLowerCase());
              //check if its LI, get text content and change state, select with close because of event bubling
            }}
          >
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </OptionsList>
        ) : null}
      </Select>
    </StyledNav>
  );
}
