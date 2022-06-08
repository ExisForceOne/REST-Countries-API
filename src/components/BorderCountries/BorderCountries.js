import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { whereAlpha3 as changeISOtoFullCoutryName } from "iso-3166-1";

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
  let navigate = useNavigate();

  if (!borders.length) return null;

  return (
    <div>
      <p>Border Countires: </p>
      <FlexContainer>
        {borders.map((item, index) => {
          return (
            <StyledBtn
              onClick={() => {
                navigate(`/details/${changeISOtoFullCoutryName(item).country}`);
                navigate(0);
              }}
              key={index}
            >
              {changeISOtoFullCoutryName(item).country}
            </StyledBtn>
          );
        })}
      </FlexContainer>
    </div>
  );
}
