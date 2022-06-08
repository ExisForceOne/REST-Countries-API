import { useEffect, useState } from "react";

import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/Searchbar/Searchbar";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";
import CountryCard from "../../components/CountryCard/CountryCard";

const URL = "https://restcountries.com/v3.1/all";
const FIELDS = "flags,name,population,region,capital";

export default function Home(props) {
  const [allCountries, setAllCountries] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [filterParam, setFilterParam] = useState("Europe");

  const fetchCountries = async () => {
    const res = await fetch(`${URL}?fields=${FIELDS}`);
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
        <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} />
        <CustomSelect />
      </Nav>
      <CountriesContainer>
        {allCountries
          .filter(
            (item) => item.name.common.toLowerCase().includes(searchParam.toLowerCase()) && item.region === filterParam
          )
          .map((item, index) => {
            return <CountryCard key={index} data={item} />;
          })}
      </CountriesContainer>
    </>
  );
}
