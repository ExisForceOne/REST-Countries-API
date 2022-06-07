import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../components/BackBtn/BackBtn";

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

const numberWithDots = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const getCurrencies = (obj) => {
  const currencies = [];
  for (const property in obj) {
    currencies.push(obj[property].name);
  }
  return currencies.join(", ");
};

const getNativeCountryName = (obj) => obj[Object.keys(obj)[0]].common;

export default function Details(props) {
  const params = useParams();
  const [country, setCountry] = useState();

  const fetchData = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${params.name}?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`
    );
    const data = await res.json();
    setCountry(...data);
    console.log(...data);
  };
  useEffect(() => {
    fetchData();
    console.log(params.name);
  }, []);

  if (!country) return <p>loading</p>;

  return (
    <StyledDetails>
      <BackBtn />
      <FlagAndTextContainer>
        <FlagContainer>
          <img src={country.flags.svg} alt="flag" />
        </FlagContainer>
        <div>
          <h3>{country.name.common}</h3>
          <TextContainer>
            <div>
              <p>
                {/* Native Name: <span>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</span> */}
                Native Name: <span>{getNativeCountryName(country.name.nativeName)}</span>
              </p>
              <p>
                Population: <span>{numberWithDots(country.population)}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion || "None"}</span>
              </p>
              <p>
                Capital: <span>{country.capital.toString() || "None"}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain: <span>{country.tld.join(" ")}</span>
              </p>
              <p>
                Currencies: <span>{getCurrencies(country.currencies)}</span>
              </p>
              <p>
                Languages: <span>{Object.values(country.languages).join(", ")}</span>
              </p>
            </div>
          </TextContainer>
        </div>
      </FlagAndTextContainer>
    </StyledDetails>
  );
}
