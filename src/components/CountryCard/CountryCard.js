import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  max-width: 630px;
  font-size: 1.4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

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

const FlagContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TextContainer = styled.div`
  padding: 35px;
`;

const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function CountryCard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/details/${data.name.common}`);
      }}
    >
      <FlagContainer>
        <img src={data.flags.svg} alt="flag" />
      </FlagContainer>
      <TextContainer>
        <h3>{data.name.common}</h3>
        <p>
          Population: <span>{numberWithDots(data.population)}</span>
        </p>
        <p>
          Region: <span>{data.region}</span>
        </p>
        <p>
          Capital: <span>{data.capital.toString() || "None"}</span>
        </p>
      </TextContainer>
    </Card>
  );
}
