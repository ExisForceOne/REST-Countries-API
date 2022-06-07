import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { whereAlpha3 } from "iso-3166-1";

const StyledBtn = styled.button`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 40px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export default function BorderCountries({ borders }) {
  useEffect(() => {
    console.log(borders.length);
    borders.forEach((item) => console.log(whereAlpha3(item).country));
  }, []);

  if (!borders.length) return null;

  return (
    <div>
      <p>Border Countires: </p>
      <FlexContainer>
        {borders.map((item, index) => {
          return (
            <Link key={index} to={`/details/${whereAlpha3(item).country}`}>
              <StyledBtn>{whereAlpha3(item).country}</StyledBtn>
            </Link>
          );
        })}
      </FlexContainer>
    </div>
  );
}
