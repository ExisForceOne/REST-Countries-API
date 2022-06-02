import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArrowBack } from "@styled-icons/material-outlined/ArrowBack";

const StyledDetails = styled.div`
  margin: 65px auto;
  width: ${({ theme }) => theme.wrapper};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textColor};

  h3 {
    font-size: 1.5em;
  }

  p {
    font-weight: 600;
    margin-bottom: 20px;
  }
  span {
    font-weight: 300;
  }

  @media (min-width: 1150px) {
    font-size: 1.2rem;
  }
`;

const FlagAndTextContainer = styled.div`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  border: 2px solid yellow;

  & > * {
    border: 1px solid black;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FlagContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  gap: 50px;

  @media (min-width: 1150px) {
    flex-direction: row;
  }

  & > * {
    border: 1px solid pink;
  }
`;

const StyledBackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  padding: 10px 40px;
`;

export default function Details(props) {
  const params = useParams();

  useEffect(() => {
    console.log(params.name);
  }, []);

  return (
    <StyledDetails>
      <StyledBackBtn>
        <ArrowBack size={20} /> Back
      </StyledBackBtn>
      <FlagAndTextContainer>
        <FlagContainer>
          <img src="https://flagcdn.com/be.svg" alt="flag" />
        </FlagContainer>
        <div>
          <h3>Belgium</h3>
          <TextContainer>
            <div>
              <p>
                Native Name: <span>Belgie</span>
              </p>
              <p>
                Population: <span>11,319,511</span>
              </p>
              <p>
                Region: <span>Europe</span>
              </p>
              <p>
                Sub Region: <span>Western Europe</span>
              </p>
              <p>
                Capital: <span>Brussels</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>.be</span>
              </p>
              <p>
                Currencies: <span>Euro</span>
              </p>
              <p>
                Languages: <span>Dutch, Flench, German</span>
              </p>
            </div>
          </TextContainer>
        </div>
      </FlagAndTextContainer>
    </StyledDetails>
  );
}
