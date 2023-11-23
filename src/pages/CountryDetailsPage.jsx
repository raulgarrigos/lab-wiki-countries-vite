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
    <div className="container">
      <p style={{ fontSize: 24, fontWeight: "bold" }}>Country Details</p>

      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
        alt={countryDetails.name.common}
      />
      <h1>{countryDetails.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  {countryDetails.borders.map((eachBorder) => {
                    return (
                      <li key={eachBorder}>
                        <Link to={`/${eachBorder}`}>{eachBorder}</Link>;
                      </li>
                    );
                  })}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
