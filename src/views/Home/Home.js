import { useEffect, useState } from "react";

import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/Searchbar/Searchbar";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";
import CountryCard from "../../components/CountryCard/CountryCard";

const URL = "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

export default function Home(props) {
  const [allCountries, setAllCountries] = useState("");

  const fetchCountries = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setAllCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (!allCountries) return <p>loading</p>;

  return (
    <>
      <Nav>
        <SearchBar />
        <CustomSelect />
      </Nav>
      <CountriesContainer>
        {allCountries.map((item, index) => {
          return <CountryCard key={index} data={item} />;
        })}
      </CountriesContainer>
    </>
  );
}
