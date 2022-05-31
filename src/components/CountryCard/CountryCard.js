import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 420px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  font-size: 1.4rem;

  img,
  svg {
    max-width: 100%;
  }

  h3 {
    margin-bottom: 25px;
  }

  p {
    font-weight: 600;
    margin-bottom: 10px;
  }
  span {
    font-weight: 300;
  }

  @media (min-width: 630px) {
    font-size: 1rem;

    h3 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 5px;
    }
  }
`;

const StyledTextContainer = styled.div`
  padding: 35px;
`;

export default function CountryCard(props) {
  return (
    <StyledCard>
      <img src="https://flagcdn.com/de.svg" alt="flag" />
      <StyledTextContainer>
        <h3>Germany</h3>
        <p>
          Population: <span>81,770,900</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </StyledTextContainer>
    </StyledCard>
  );
}
