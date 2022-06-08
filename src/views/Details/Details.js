import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BackBtn from "../../components/BackBtn/BackBtn";
import BorderCountries from "../../components/BorderCountries/BorderCountries";
import numberWithCommas from "../../helpers/numberWithCommas";
import getCurrencies from "../../helpers/getCurrencies";
import getNativeCountryName from "../../helpers/getNativeCountryName";

// `https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,capital,subregion,tld,currencies,languages,borders`

const URL = "https://restcountries.com/v3.1/name";
const FIELDS = "flags,name,population,region,capital,subregion,tld,currencies,languages,borders";

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

  @media (min-width: 1150px) {
    gap: 55px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex: 1;
    }
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
`;

export default function Details(props) {
  const { name } = useParams();
  const [country, setCountry] = useState();

  const fetchData = async () => {
    const res = await fetch(`${URL}/${name}?fields=${FIELDS}`);
    const data = await res.json();
    setCountry(...data);
  };
  useEffect(() => {
    setCountry();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

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
                Native Name: <span>{getNativeCountryName(country.name.nativeName)}</span>
              </p>
              <p>
                Population: <span>{numberWithCommas(country.population)}</span>
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
          <BorderCountries borders={country.borders} />
        </div>
      </FlagAndTextContainer>
    </StyledDetails>
  );
}
