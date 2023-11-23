import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  console.log(params.countryId);

  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [params.countryId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      );
      console.log(response);
      setCountryDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading === true) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div>
      <h3>Country Details</h3>

      <div>
        <h5>{countryDetails.name.common}</h5>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          alt={countryDetails.name.common}
        />
        <p>Capital: {countryDetails.capital}</p>
        <p>
          Borders:
          {countryDetails.borders.map((eachBorder) => {
            return (
              <li key={eachBorder}>
                <Link to={`/${eachBorder}`}>{eachBorder}</Link>;
              </li>
            );
          })}
        </p>
        <p>Area: {countryDetails.area} km² </p>
      </div>
    </div>
  );
}

export default CountryDetails;
