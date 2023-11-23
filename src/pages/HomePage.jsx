import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countriesList, setCountriesList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response);

      setCountriesList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h3>Buscando...</h3>;
  }

  return (
    <div>
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div>
        {countriesList.map((eachCountry) => {
          return (
            <p key={eachCountry._id}>
              <Link to={`/${eachCountry.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                  alt={eachCountry.name.common}
                  width={25}
                />{" "}
                <br />
                {eachCountry.name.common}{" "}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
