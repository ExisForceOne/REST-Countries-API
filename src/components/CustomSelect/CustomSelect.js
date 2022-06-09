import styled from "styled-components";
import { ArrowIosDownward as Arrow } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { useState } from "react";

const Select = styled.button`
  max-width: 320px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  padding: 25px 35px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  bottom: -10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  list-style: none;
  transform: translateY(100%);

  li {
    padding: 0px 35px;
    text-align: left;
  }
`;

const StyledArrow = styled(Arrow)`
  transform: ${(props) => (props.rotated ? "rotate(180deg)" : "rotate(0)")};
`;

export default function CustomSelect({ filterParam, setFilterParam }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Select
      onClick={() => {
        setShowOptions(!showOptions);
      }}
    >
      {filterParam || "Filter by region"}
      <StyledArrow rotated={showOptions} />
      {showOptions ? (
        <OptionsList
          onClick={(e) => {
            if (e.target.tagName === "LI") setFilterParam(e.target.textContent);
            //check if its LI, get text content and change state, select will close because of event bubling
          }}
        >
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </OptionsList>
      ) : null}
    </Select>
  );
}
